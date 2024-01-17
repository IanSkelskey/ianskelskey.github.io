export default function ContentRow({ children, useAltColor }) {
  let className;
  if (useAltColor) {
    className =
      "min-w-full dark:bg-neutral-900 bg-neutral-150 px-6 md:px-12 pb-9 pt-3";
  } else {
    className = "min-w-full dark:bg-neutral-950 bg-white px-6 md:px-12 pb-9 pt-3";
  }
  return <div className={className}>{children}</div>;
}
