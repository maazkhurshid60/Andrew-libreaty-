"use client";

import { useCallback, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Client-side validation + simulated submit, ported from js/main.js handleForm().
 * Uncontrolled inputs are validated on submit; `.is-invalid` is toggled directly
 * on the DOM nodes so the exact original styling/behavior is preserved.
 */
export function useLeadForm(successMessage: string) {
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      let valid = true;

      form.querySelectorAll<HTMLInputElement>("input[required]").forEach((input) => {
        const empty = input.type === "checkbox" ? !input.checked : !input.value.trim();
        const badEmail = input.type === "email" && !!input.value && !EMAIL_RE.test(input.value);
        input.classList.toggle("is-invalid", empty || badEmail);
        if (empty || badEmail) valid = false;
      });

      if (!valid) {
        setIsError(true);
        setStatus("Please complete the highlighted fields.");
        form.querySelector<HTMLInputElement>(".is-invalid")?.focus();
        return;
      }

      setIsError(false);
      setStatus("");
      setSending(true);

      setTimeout(() => {
        setSending(false);
        setStatus(successMessage);
        form.reset();
      }, 900);
    },
    [successMessage]
  );

  const clearInvalid = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.classList.remove("is-invalid");
  }, []);

  return { status, isError, sending, onSubmit, clearInvalid };
}
