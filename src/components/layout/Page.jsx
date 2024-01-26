export default function Page({ children, title, blurb }) {
  return (
    <div className="lg:w-10/12 md:w-11/12 w-full mx-auto md:py-12 flex flex-col gap-6 lg:gap-12">
      {(title || blurb) && (
        <div className="flex flex-col gap-4 text-center p-4">
          {title && <h1 className="text-4xl font-bold font-serif">{title}</h1>}
          {blurb && <div className="subtle-text">{blurb}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
