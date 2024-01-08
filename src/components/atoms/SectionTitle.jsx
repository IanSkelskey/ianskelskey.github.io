export default function SectionTitle({ title, className }) {
    return (
        <div className={className}>
            <div className="flex items-center space-x-6 w-full">
                <h1 className="text-3xl font-bold font-serif">{title}</h1>
                <div className="w-1/4 bg-blue-gradient h-0.5" />
            </div>
        </div>
    )
}