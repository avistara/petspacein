import SectionTitle from "../SectionTitle";

export default function FAQ() {
  return (
    <section id="faq" className="bg-petspace-bg">
      <SectionTitle title="FAQ" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <p className="text-lg text-petspace-brown-700">
          Answer common questions.
        </p>
      </div>
    </section>
  );
}
