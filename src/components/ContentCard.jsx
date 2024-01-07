export default function ContentCard({ children, title }) {
    return (
        <div className="flex flex-col space-y-6 w-full bg-white dark:bg-black rounded-b-2xl md:rounded-t-none md:rounded-tl-2xl rounded-t-2xl md:p-12 p-6 relative">
            {/* Title and horizontal line */}
            <div className="flex items-center space-x-6">
                {/* Title text with color white and font serif */}
                <h1 className="text-3xl font-bold font-serif">{title}</h1>
                {/* Horizontal line with color gradation */}
                <div className="w-1/4 bg-gradient-to-r from-theme-blue to-theme-blue-light h-0.5" />
            </div>
            {/* Content */}
            {children}
        </div>
    )
}