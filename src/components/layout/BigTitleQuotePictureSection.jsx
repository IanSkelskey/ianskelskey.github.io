import Icon from "../atoms/Icon";

export default function BigTitleQuotePictureSection({ title, icon, subtitle, quote, children, image, imageAlt }) {
    return (
        <div className="flex flex-col xl:flex-row lg:gap-12 gap-6 p-4 items-stretch">
            <div className="flex flex-col xl:gap-6 gap-4 flex-1 my-auto">
                <div className="flex 2xl:text-5xl xl:text-4xl text-3xl gap-6">
                    {icon && <Icon name={icon} className="2xl:text-5xl xl:text-4xl text-3xl" />}
                    <h1 className="font-serif font-bold">{title}</h1>
                </div>

                <p className="xl:text-2xl text-xl subtle-text">{subtitle}</p>
                <blockquote className="italic border-l-4 border-theme-blue pl-4">
                    {quote}
                </blockquote>
                {children}
            </div>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="w-full aspect-w-16 aspect-h-9 xl:aspect-none xl:min-h-full 2xl:min-h-70 3xl:min-h-100 xl:w-1/3"
                aria-label={imageAlt}
            />
        </div>
    );
}
