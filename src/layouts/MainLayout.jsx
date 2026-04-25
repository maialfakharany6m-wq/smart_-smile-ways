import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

export default function MainLayout({ children }) {
  return (
    <div>
      <Cursor />
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}