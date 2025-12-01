import SectionTitle from "../SectionTitle";

export default function WhyPetspace() {
  return (
    <section id="why" className="bg-petspace-bg">
      <SectionTitle title="Why Petspace" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <p className="text-lg text-petspace-brown-700">
          Explain what makes Petspace unique.
        </p>
      </div>
    </section>
  );
}
