type SectionTitleProps = {
  title: string;
  kicker?: string;
};

export default function SectionTitle({ title, kicker }: SectionTitleProps) {
  return (
    <div className="relative border-b border-petspace-border left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-petspace-bg">
      <div className="h-px w-full bg-petspace-brown-300" />
      <div className="w-full px-4 sm:px-6 py-6 md:py-8">
        {kicker ? (
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-petspace-brown-500">
            {kicker}
          </p>
        ) : null}
        <h2 className="text-3xl md:text-4xl font-bold text-petspace-brown-700">
          {title}
        </h2>
      </div>
      <div className="h-px w-full bg-petspace-brown-300" />
    </div>
  );
}
