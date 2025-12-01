export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate w-full flex flex-col justify-end overflow-hidden bg-emerald-600 text-white min-h-[768px] md:min-h-[896px] mt-6 md:mt-8"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-placeholder.png')" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative flex h-full w-full flex-col px-4 sm:px-6 md:px-10 pt-12 pb-16 text-left space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em]">
          Daycare & Boarding
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Experience the happiest place for dogs
        </h1>
        <h2 className="text-xl md:text-2xl text-emerald-50/90">
          Book trusted services in minutes
        </h2>
        <button className="mt-6 inline-flex self-start w-auto items-center justify-center rounded-full bg-white px-4 py-2 text-emerald-700 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
          Daycare and Boarding
        </button>
      </div>
    </section>
  );
}
