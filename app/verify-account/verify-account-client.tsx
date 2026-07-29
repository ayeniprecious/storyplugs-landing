"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MailCheck, XCircle } from "lucide-react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { getSupabase } from "../lib/supabase";

type Status = "idle" | "verifying" | "success" | "error";

export function VerifyAccountClient() {
  const searchParams = useSearchParams();
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const linkIsValid = !!tokenHash && !!type;

  async function handleVerify() {
    if (!tokenHash || !type) return;
    setStatus("verifying");
    try {
      const { error } = await getSupabase().auth.verifyOtp({
        token_hash: tokenHash,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: type as any,
      });
      if (error) {
        setErrorMessage(error.message);
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-6 py-16 text-center">
          {!linkIsValid ? (
            <>
              <XCircle className="h-12 w-12 text-muted" />
              <h1 className="mt-5 text-2xl font-extrabold tracking-tight">
                Link problem
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                This verification link is invalid or incomplete. Go back to the
                StoryPlugs app and request a new confirmation email from the
                sign-up screen.
              </p>
            </>
          ) : status === "success" ? (
            <div className="w-full rounded-2xl border border-border bg-card px-6 py-8">
              <CheckCircle2 className="mx-auto h-12 w-12 text-brand" />
              <h1 className="mt-5 text-2xl font-extrabold tracking-tight">
                Email verified
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Your email is confirmed. You can close this page now and sign
                in back in the StoryPlugs app.
              </p>
            </div>
          ) : status === "error" ? (
            <>
              <XCircle className="h-12 w-12 text-muted" />
              <h1 className="mt-5 text-2xl font-extrabold tracking-tight">
                Verification failed
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {errorMessage ?? "This link is invalid or has expired."}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Go back to the app and request a new confirmation email.
              </p>
            </>
          ) : (
            <>
              <MailCheck className="h-12 w-12 text-brand" />
              <h1 className="mt-5 text-2xl font-extrabold tracking-tight">
                Verify your email
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tap the button below to confirm your email address and finish
                setting up your StoryPlugs account.
              </p>
              <button
                onClick={handleVerify}
                disabled={status === "verifying"}
                className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "verifying" ? "Verifying…" : "Verify Email"}
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
