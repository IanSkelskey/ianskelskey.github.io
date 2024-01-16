import { useEffect, useState } from "react";
import SmallCard from "../atoms/SmallCard";
import SubSection from "../layout/SubSection";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdoqkavq");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  /**Use Effect hook to update form when errors change */
  useEffect(() => {}, [emailError, nameError, messageError]);

  function validateName(value) {
    if (value.length <= 0) {
      setNameError("Name must not be empty");
      return false;
    }
    setNameError("");
    return true;
  }

  function validateEmail(value) {
    if (value.length <= 0) {
      setEmailError("Email must not be empty");
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  }

  function validateMessage(value) {
    if (value.length <= 0) {
      setMessageError("Message must not be empty");
      return false;
    }
    setMessageError("");
    return true;
  }

  function validateForm(name, email, message) {
    let isValid = true;
    if (!validateName(name)) {
      isValid = false;
    }
    if (!validateEmail(email)) {
      isValid = false;
    }
    if (!validateMessage(message)) {
      isValid = false;
    }
    return isValid;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    if (validateForm(name, email, message)) {
      handleSubmit(event);
    } else {
      return;
    }
  }

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
          <form
            className="flex flex-col space-y-3 p-6"
            onSubmit={handleFormSubmit}
          >
            <p className="subtle-text py-6">
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between">
                <label className="subtle-text text-xs" htmlFor="name">
                  Name
                </label>
                <p className="text-red-500 text-xs">{nameError}</p>
              </div>
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
              <div className="flex justify-between">
                <label className="subtle-text text-xs" htmlFor="name">
                  Email
                </label>
                <p className="text-red-500 text-xs">{emailError}</p>
              </div>
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
              <div className="flex justify-between">
                <label className="subtle-text text-xs" htmlFor="name">
                  Message
                </label>
                <p className="text-red-500 text-xs">{messageError}</p>
              </div>
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
