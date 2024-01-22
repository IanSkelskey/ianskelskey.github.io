import Icon from "../atoms/Icon";


export default function BigTitleQuotePictureSection({ title, icon, subtitle, quote, children, image, imageAlt }) {
    return (
        <div className="flex flex-col xl:flex-row items-center gap-12 p-4">
            <div className="flex flex-col gap-6 flex-1">
                <div className="flex text-5xl gap-6">
                    {icon && <Icon name={icon} className="text-5xl" />}
                    <h1 className="font-serif font-bold">{title}</h1>
                </div>
                
                <p className="text-2xl subtle-text">{subtitle}</p>
                <blockquote className="italic border-l-4 border-theme-blue pl-4">
                    {quote}
                </blockquote>
                {children}
            </div>
            <img
                src={image}
                alt={imageAlt}
                className="grayscale opacity-90 2xl:w-114 xl:w-96"
            />
        </div>
    );
}