import type { Metadata } from "next";

import { LegalLayout } from "../components/legal-layout";
import { LEGAL_UPDATED, PRIVACY_SECTIONS } from "../legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — StoryPlugs",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={LEGAL_UPDATED}
      sections={PRIVACY_SECTIONS}
    />
  );
}
