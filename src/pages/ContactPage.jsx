import ContactForm from "../components/content/ContactForm";
import Page from "../components/layout/Page";

const formId = "mdoqkavq";

export default function ContactPage() {
  const blurb = (
    <p>
      Feel free to contact me if you have any questions or would like to work
      together. You can fill out the form below or email me at{" "}
      <a href="mailto:ianskelskey@gmail.com">IanSkelskey@gmail.com</a>.
    </p>
  );
  return (
    <Page title="Contact Me" blurb={blurb}>
      <ContactForm formId={formId} />
    </Page>
  );
}
