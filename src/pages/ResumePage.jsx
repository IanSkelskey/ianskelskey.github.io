import Page from "../components/layout/Page";
import CV from "../components/content/resume/CV";
import IconButton from "../components/atoms/IconButton";

export default function ResumePage() {
  const blurb =
    <div className="flex flex-col items-center gap-12">
      <p>
        View my professional resume below or download it as a PDF.
      </p>
      <IconButton icon="resume" text="Download" className="bg-theme-blue rounded-md font-bold text-white" />
    </div>
  return (
    <Page title="Resume" blurb={blurb}>
      <CV />
    </Page>
  );
}
