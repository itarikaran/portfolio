export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`section-heading flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 shadow-sm shadow-blue-100/50 backdrop-blur">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}