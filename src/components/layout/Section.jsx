import SectionTitle from "../atoms/SectionTitle";

export default function Section({ title, children }) {
    return (
        <section className="flex flex-col space-y-6 min-w-full">
            <SectionTitle title={title} />
            {children}
        </section>
    )
}