export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-lg text-slate-600 leading-8 mx-auto">
        {description}
      </p>
    </div>
  );
}
