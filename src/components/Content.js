export default function Content({ children }) {
    return (
        <div className="flex-grow p-6 flex mx-10 max-w-7xl min-h-full bg-theme-cream">
            { children }
        </div>
    )
}