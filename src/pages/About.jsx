import Section from "../components/Section";

export default function About() {
  return (
    <Section title="About Us" subtitle="OUR IDENTITY">

      <div className="grid md:grid-cols-2 gap-10">

        <div className="p-10 bg-blue-50 rounded-xl">
          <h3>VISION</h3>
          <p>
            To become a leading force in educational investment and management, transforming schools and nurseries into globally recognized, high-performance institutions through innovation and international standards.
          </p>
        </div>

        <div className="p-10 bg-[#0B1B3A] text-white rounded-xl">
          <h3>MISSION</h3>
          <p>
            We design, develop, and operate international schools by integrating academic excellence, institutional governance, and financial efficiency, delivering scalable education models that meet global accreditation standards and workforce demands.
          </p>
        </div>

      </div>

    </Section>
  );
}