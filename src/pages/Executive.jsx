import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Executive() {

  return (
    <div>

      <Cursor />
      <Navbar />

      <section className="pt-28 px-6 md:px-24">

        <h1 className="text-3xl mb-10">Executive Team</h1>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            ["Eng. Sameer Abdullah", "Founder- CEO smart smile way Education Consultant for British and  American Education system", "/exec/exec1.jpeg"],
            ["Mr. Ibrahim Elbiblany", "Co-Founder", "/exec/2.jpg"],
            ["Dr. Heba Sultan", "General Manager", "/exec/exec3.png"],
            ["Eng. Mai Ashraf", "Tech Director", "/exec/4.jpg"],
            ["Dr. Norhan Khaled", "American Education Manager", "/exec/exec6.png"],
            ["Mrs. Samar Mansour", "British Education Manager", "/exec/exec5.png"],
          ].map(([name, role, img], i) => (
            <div key={i} className="border rounded-xl overflow-hidden">

              <img src={img} className="h-[280px] w-full object-cover" />

              <div className="p-6">
                <h3>{name}</h3>
                <p className="text-gray-500 text-sm mt-2">{role}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}