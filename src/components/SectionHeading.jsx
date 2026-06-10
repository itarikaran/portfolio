function SectionHeading({ eyebrow, title, description, id, align = "left" }) {
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 max-w-3xl mb-12 ${alignmentClass}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-red-400/90 font-semibold">
          {eyebrow}
        </p>
      ) : null}

      <div className="space-y-4">
        <h2 id={id} className="text-4xl md:text-5xl font-bold text-white leading-[0.95]">
          {title}
        </h2>

        {description ? (
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default SectionHeading;