export default function SmallCard({ children }) {
    return (
        <div className="dark:bg-black bg-white border-2 rounded-md dark:border-neutral-800 border-neutral-200 p-6">
            {children}
        </div>
    )
}