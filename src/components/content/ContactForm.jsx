import SmallCard from "../atoms/SmallCard";
import SubSection from "../layout/SubSection";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdoqkavq");

  if (state.submitting) {
    return <p>Loading...</p>;
  }
  if (state.succeeded) {
    return <p>Thanks for getting in touch!</p>;
  }
  return (
    <SubSection title="Get in touch">
      <div className="w-full flex justify-center">
        <SmallCard>
          <form className="flex flex-col space-y-3 p-6" onSubmit={handleSubmit}>
            <p className="subtle-text py-6">
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
            <div className="flex flex-col space-y-3">
              <label className="subtle-text text-xs" htmlFor="name">
                Name
              </label>
              <input
                className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-200 p-2"
                type="text"
                name="name"
                id="name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="subtle-text text-xs" htmlFor="email">
                Email
              </label>
              <input
                className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-200 p-2"
                type="email"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="subtle-text text-xs" htmlFor="message">
                Message
              </label>
              <textarea
                className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-200 p-2"
                name="message"
                id="message"
                rows="5"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="w-full flex">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-gradient rounded-md w-fit py-1 px-3 text-white"
              >
                Send
              </button>
            </div>
          </form>
        </SmallCard>
      </div>
    </SubSection>
  );
}
