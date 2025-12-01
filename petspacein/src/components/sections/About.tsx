import SectionTitle from "../SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-petspace-bg">
      <SectionTitle title="About Us" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <p className="text-lg text-petspace-brown-700">
          Share the story and mission of Petspace.
        </p>
      </div>
    </section>
  );
}
