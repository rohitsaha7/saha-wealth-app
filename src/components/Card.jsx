export default function Card({ children }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
      {children}
    </div>
  );
}