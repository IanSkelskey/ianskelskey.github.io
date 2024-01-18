import ContactForm from "../components/content/ContactForm";
import Page from "../components/layout/Page";

export default function ContactPage() {
  return (
    <Page title="Contact Me" blurb="Feel free to contact me if you have any questions or would like to work together.">
        <ContactForm />
    </Page>
  );
}
