export default function CVSection({ title, children }) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-serif font-bold italic">{title}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
