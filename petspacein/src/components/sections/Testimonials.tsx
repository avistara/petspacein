import SectionTitle from "../SectionTitle";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-petspace-bg">
      <SectionTitle title="Testimonials" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <p className="text-lg text-petspace-brown-700">
          Display customer testimonials or reviews.
        </p>
      </div>
    </section>
  );
}
