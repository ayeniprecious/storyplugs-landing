import type { Metadata } from "next";

import { LegalLayout } from "../components/legal-layout";
import { LEGAL_UPDATED, TERMS_SECTIONS } from "../legal-content";

export const metadata: Metadata = {
  title: "Terms of Service — StoryPlugs",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated={LEGAL_UPDATED}
      sections={TERMS_SECTIONS}
    />
  );
}
