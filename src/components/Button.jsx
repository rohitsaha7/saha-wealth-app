export default function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  const primary =
    "bg-blue-600 text-white hover:bg-blue-700";

  const secondary =
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition duration-300 ${
        variant === "primary"
          ? primary
          : secondary
      }`}
    >
      {children}
    </a>
  );
}
