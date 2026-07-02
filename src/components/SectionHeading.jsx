export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}