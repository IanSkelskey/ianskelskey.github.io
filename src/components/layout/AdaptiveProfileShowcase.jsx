export default function AdaptiveProfileShowcase({
  profileSection,
  navSection,
  footer,
  children,
}) {
  return (
    <div className="min-h-screen md:p-12 p-0 max-w-screen-3xl mx-auto">
      <div className="flex md:flex-row flex-col w-full md:space-x-6 space-y-6">
        <div className="h-fit md:w-96 w-full">{profileSection}</div>
        <div className="flex flex-0 flex-col md:pt-14 w-full">
          <div className="flex justify-center">{navSection}</div>
          <div className="w-full large-card">
            {children}
            <footer className="p-6 dark:bg-neutral-900 bg-neutral-150 md:rounded-b-2xl">
              {footer}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
