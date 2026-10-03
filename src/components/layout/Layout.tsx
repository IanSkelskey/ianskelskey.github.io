import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import { APP_VERSION, BASE_PATH } from "../../config/env";

const NAV_LINKS = [
  { label: "Portfolio", href: "https://ianskelskey.com/" },
  { label: "GitHub", href: "https://github.com/IanSkelskey" },
];

const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-full flex-col bg-surface text-foreground">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-lg focus:bg-raised focus:p-4"
    >
      Skip to content
    </a>
    <header className="border-b border-divider">
      <div className="mx-auto flex w-full max-w-[1128px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-11 min-w-0 items-center gap-3 font-semibold text-foreground hover:text-accent"
        >
          <span className="flex size-[50px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-raised ring-1 ring-divider">
            {/* Render the 25px pixel portrait at exactly 2x. */}
            <img
              src={`${BASE_PATH}pixel-portrait.png`}
              alt=""
              width={50}
              height={50}
              className="size-[50px] max-w-none shrink-0 [image-rendering:pixelated]"
            />
          </span>
          {/* Stacks under the name on narrow screens so the nav stays on one row. */}
          <span className="flex flex-col leading-tight sm:flex-row sm:gap-1.5">
            Ian Skelskey
            <span className="text-sm font-normal text-muted sm:text-base">
              <span aria-hidden="true" className="hidden sm:inline">
                /{" "}
              </span>
              Demos
            </span>
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm font-medium sm:gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center text-muted hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-[1128px] flex-1 px-4 py-10 sm:px-6 sm:py-14"
    >
      {children}
    </main>
    <footer className="border-t border-divider">
      <div className="mx-auto flex max-w-[1128px] flex-col items-center gap-1 px-4 py-5 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          Made with <span aria-label="love">❤️</span> by Ian Skelskey &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <p className="flex items-center gap-2">
          <span>Demos v{APP_VERSION}</span>
          <span aria-hidden="true" className="text-faint">
            ·
          </span>
          <a
            href="https://github.com/IanSkelskey/ianskelskey.github.io"
            className="inline-flex min-h-11 items-center underline decoration-divider underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
