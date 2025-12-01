import SectionTitle from "../SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-petspace-bg">
      <SectionTitle title="Contact Us" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <p className="text-lg text-petspace-brown-700">
          Provide contact details or a form placeholder.
        </p>
      </div>
    </section>
  );
}
