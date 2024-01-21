import Drawer from "./Drawer";

export default function DrawerContentFooterLayout({
  drawerContents,
  footer,
  content,
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex md:flex-row flex-col w-full">
        <Drawer title="Ian Skelskey">{drawerContents}</Drawer>
        {/** Main content */}
        <div className="flex flex-col w-full dark:bg-black bg-white min-h-screen max-h-screen md:overflow-y-auto">
          {/** Content */}
          <div className="w-full flex-grow">{content}</div>
          {/** Footer */}
          <footer className="p-6 dark:bg-neutral-900 bg-neutral-150">
            {footer}
          </footer>
        </div>
      </div>
    </div>
  );
}
