export default function ContentRow({ children, useAltColor }) {
  let className;
  if (useAltColor) {
    className =
      "min-w-full dark:bg-neutral-900 bg-neutral-150 px-6 md:px-12 py-3";
  } else {
    className = "min-w-full dark:bg-black bg-white px-6 md:px-12 py-3";
  }
  return <div className={className}>{children}</div>;
}
