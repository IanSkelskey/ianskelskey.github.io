export default function ContentCard({ children, title }) {
    return (
        <div className="flex flex-col space-y-6 w-full rounded-2xl bg-black p-12 relative">
            {/* Title and horizontal line */}
            <div className="flex items-center space-x-6">
                {/* Title text with color white and font serif */}
                <h1 className="text-3xl font-bold text-white font-serif">{title}</h1>
                {/* Horizontal line with color gradation */}
                <div className="w-1/4 bg-gradient-to-r from-theme-blue to-theme-blue-light h-0.5" />
            </div>
            {/* Content */}
            {children}
            {/* Footer placed absolutely at the bottom center with white text*/}
            <footer className="flex justify-center items-center text-white pt-6">
                <p>
                    © 2023 Ian Skelskey. All rights reserved.
                </p>
            </footer>


        </div>
    )
}