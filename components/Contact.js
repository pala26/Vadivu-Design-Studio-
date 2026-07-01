"use client";

import { useState } from "react";

const initialState = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Tell us your name.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Add a short message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
    }
  }

  return (
    <section
      id="contact"
      className="bg-ink px-6 py-20 text-canvas md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s start
            <br />
            something.
          </h2>
          <p className="mt-5 max-w-sm text-canvas/70">
            Share a few details about your project and we&apos;ll get back to
            you within two working days.
          </p>
          <div className="mt-10 space-y-2 font-mono text-sm text-canvas/70">
            <p>hello@vadivudesign.com</p>
            <p>Chennai, Tamil Nadu</p>
          </div>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <div
              role="status"
              className="flex h-full flex-col items-start justify-center gap-3 rounded-2xl border border-canvas/15 bg-canvas/5 p-8"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-gold">
                Message sent
              </span>
              <p className="font-display text-2xl font-semibold">
                Thanks — we&apos;ll be in touch shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="focus-ring mt-2 rounded-full border border-canvas/30 px-5 py-2 font-mono text-xs uppercase tracking-wide transition-colors hover:border-canvas"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Aria Chen"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="aria@studio.com"
                />
              </div>
              <Field
                label="Message"
                name="message"
                as="textarea"
                rows={5}
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Tell us about your project..."
              />
              <button
                type="submit"
                className="focus-ring w-fit rounded-full bg-clay px-7 py-3 font-mono text-sm uppercase tracking-wide text-canvas transition-colors hover:bg-canvas hover:text-ink"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, error, as = "input", ...props }) {
  const Tag = as;
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-wide text-canvas/70">
        {label}
      </span>
      <Tag
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="focus-ring mt-2 w-full rounded-lg border border-canvas/20 bg-transparent px-4 py-3 text-canvas placeholder:text-canvas/40 focus:border-clay"
        {...props}
      />
      {error && (
        <span
          id={`${name}-error`}
          className="mt-1.5 block text-xs text-clay"
        >
          {error}
        </span>
      )}
    </label>
  );
}
