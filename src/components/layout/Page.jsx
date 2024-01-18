export default function Page({ children, title, blurb }) {
    return (
        <div className="lg:w-10/12 w-full mx-auto p-6 md:py-12 flex flex-col gap-12 lg:gap-20">
            {(title || blurb) && <div className="flex flex-col gap-4 text-center">
                {title && <h1 className="text-4xl font-bold font-serif">{title}</h1>}
                {blurb && <p className="subtle-text">
                    {blurb}
                </p>}
            </div>}
            {children}
        </div>
    )
}