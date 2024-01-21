import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import IconButton from "../atoms/IconButton";

export default function ContactForm({ formId }) {
  const [state, handleSubmit] = useForm(formId);

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
    <div className="w-full flex justify-center">
      <form
        className="flex flex-col space-y-3 w-full max-w-2xl"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <label className="subtle-text text-xs" htmlFor="name">
              Name
            </label>
            <p className="text-red-500 text-xs">{nameError}</p>
          </div>
          <input
            className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-300 p-2 rounded-md"
            type="text"
            name="name"
            placeholder="Name"
            id="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <label className="subtle-text text-xs" htmlFor="name">
              Email
            </label>
            <p className="text-red-500 text-xs">{emailError}</p>
          </div>
          <input
            className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-300 p-2 rounded-e-md"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <label className="subtle-text text-xs" htmlFor="name">
              Message
            </label>
            <p className="text-red-500 text-xs">{messageError}</p>
          </div>
          <textarea
            className="dark:bg-black bg-white border-2 dark:border-neutral-800 border-neutral-300 p-2 rounded-md"
            name="message"
            id="message"
            placeholder="Enter your message here..."
            rows="5"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="w-full flex">
          <IconButton
            type="submit"
            icon="paperPlane"
            text="Send"
            className="bg-theme-blue rounded-md text-white"
          />
        </div>
      </form>
    </div>
  );
}
