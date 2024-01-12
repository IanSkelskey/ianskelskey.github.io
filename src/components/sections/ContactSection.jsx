import ContentRow from "../layout/ContentRow";
import Section from "../layout/Section";
import ContactForm from "../content/ContactForm";

export default function ContactSection() {
  return (
    <Section title="Contact">
      <ContentRow>
        <ContactForm />
      </ContentRow>
    </Section>
  );
}
