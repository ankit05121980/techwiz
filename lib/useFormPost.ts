"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function useFormPost<T extends Record<string, unknown>>(endpoint: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string>("");

  async function submit(data: T): Promise<boolean> {
    setStatus("submitting");
    setErrors({});
    setMessage("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(json.errors ?? {});
        setMessage(json.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return false;
      }
      setMessage(json.message ?? "Success!");
      setStatus("success");
      return true;
    } catch {
      setMessage("Network error. Please check your connection and try again.");
      setStatus("error");
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setErrors({});
    setMessage("");
  }

  return { status, errors, message, submit, reset };
}
