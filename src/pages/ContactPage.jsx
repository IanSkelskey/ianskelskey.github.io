import ContentRow from "../components/layout/ContentRow";
import Section from "../components/layout/Section";
import ContactForm from "../components/content/ContactForm";

export default function ContactPage() {
  return (
    <Section title="Contact">
      <ContentRow>
        <ContactForm />
      </ContentRow>
    </Section>
  );
}
