export default function ContentCard({ children, title }) {
    return (
        <div className="flex flex-col space-y-6 w-full md:p-12 p-6 relative content-card">
            {/* Title and horizontal line */}
            <div className="flex items-center space-x-6">
                {/* Title text with color white and font serif */}
                <h1 className="text-3xl font-bold font-serif">{title}</h1>
                {/* Horizontal line with color gradation */}
                <div className="w-1/4 bg-blue-gradient h-0.5" />
            </div>
            {/* Content */}
            {children}
        </div>
    )
}