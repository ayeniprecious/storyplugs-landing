import { Suspense } from "react";
import type { Metadata } from "next";

import { VerifyAccountClient } from "./verify-account-client";

export const metadata: Metadata = {
  title: "Verify Your Email — StoryPlugs",
};

export default function VerifyAccountPage() {
  return (
    <Suspense fallback={null}>
      <VerifyAccountClient />
    </Suspense>
  );
}
