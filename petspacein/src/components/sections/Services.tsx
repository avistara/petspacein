import SectionTitle from "../SectionTitle";

export default function Services() {
  return (
    <section id="services" className="bg-petspace-bg">
      <SectionTitle title="Services" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <p className="text-lg text-petspace-brown-700">
          Outline the services offered.
        </p>
      </div>
    </section>
  );
}
