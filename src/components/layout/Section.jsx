import SectionTitle from "../atoms/SectionTitle";

export default function Section({ title, children }) {
  return (
    <section className="flex flex-col min-w-full pt-6 md:pt-12">
      <div className="px-6 md:px-12">
        <SectionTitle title={title} />
      </div>
      {children}
    </section>
  );
}
