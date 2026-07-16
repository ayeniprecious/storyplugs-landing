// Single source of truth for both legal pages on this site AND the plain-text
// blobs pasted into Admin -> Settings (app_settings.privacy_policy /
// terms_of_service), which the mobile app's in-app Privacy/Terms screens
// read directly. Keep both in sync by editing here first.

export const LEGAL_UPDATED = "July 15, 2026";

export interface LegalSection {
  heading: string;
  body: string[];
}

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    body: [
      "This Privacy Policy explains what information StoryPlugs (\"we\", \"us\") collects when you use the StoryPlugs app and website, how we use it, and the choices you have. By using StoryPlugs, you agree to the practices described here.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Account information: your email address, display name, and avatar, collected when you sign up.",
      "Content you create: comments and replies you post, journal entries you write (Premium), folders you create, and stories you save or favorite.",
      "Usage information: which stories you read or complete, your reading streak and history, your reading progress, and your notification preferences.",
      "Device information: a push notification token, if you enable notifications, used only to deliver notifications to your device.",
      "Subscription information: whether you have an active Premium subscription and its status. Payment is handled entirely by the Apple App Store or Google Play — we never see or store your card number or other payment details.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To provide the core app experience: showing you stories, tracking your streak, saving your folders and journal, and powering comments.",
      "To send push notifications you've opted into, such as new story alerts.",
      "To determine your Premium entitlement so subscriber-only features unlock correctly.",
      "To moderate community content and enforce our Terms of Service.",
    ],
  },
  {
    heading: "What We Don't Do",
    body: [
      "We do not sell your personal information.",
      "We do not use third-party advertising trackers.",
      "We do not share your journal entries with anyone, including other users — they're private to your account.",
    ],
  },
  {
    heading: "Sharing Your Information",
    body: [
      "We share information only with the service providers that make the app work: Supabase (our database and authentication provider), RevenueCat (subscription management), Apple and Google (app distribution and payment processing), and our push notification provider. Each only receives what it needs to perform its function, and none are permitted to use your data for their own purposes.",
      "We may disclose information if required by law, or to protect the rights, safety, or property of StoryPlugs or our users.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can hide your identity on new comments, showing \"Anonymous\" instead of your name and photo, from the Privacy screen in the app.",
      "You can edit or delete your journal entries, remove comments you've posted, and manage your saved folders at any time.",
      "You can delete your account entirely from Profile → Delete Account. This permanently removes your profile, comments, journal, folders, and all associated data, and cannot be undone.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "We retain your account information for as long as your account is active. If you delete your account, your data is permanently deleted, except where we're required to retain limited records for legal or accounting purposes.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "StoryPlugs is not directed at children under 13, and we do not knowingly collect information from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use industry-standard measures, including encryption in transit and row-level access controls on our database, to protect your information. No method of transmission or storage is 100% secure, but we work to protect your data appropriately.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. If we make material changes, we'll update the \"last updated\" date and, where appropriate, notify you in the app.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "Questions about this policy? Email us at hello@storyplugs.com.",
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your use of the StoryPlugs app and website. By creating an account or using StoryPlugs, you agree to these Terms. If you don't agree, please don't use the app.",
    ],
  },
  {
    heading: "Description of Service",
    body: [
      "StoryPlugs is a mobile app that delivers daily short stories, reflections, and quotes, with community features like comments and optional Premium features such as journaling, offline downloads, and reading recaps.",
    ],
  },
  {
    heading: "Accounts",
    body: [
      "You must provide accurate information when creating an account and are responsible for keeping your login credentials secure. You must be at least 13 years old to use StoryPlugs.",
    ],
  },
  {
    heading: "User Content & Conduct",
    body: [
      "You retain ownership of the comments, replies, and journal entries you create. By posting a comment, you grant us a license to display it within the app.",
      "You agree not to post content that is harassing, hateful, sexually explicit, illegal, or that infringes on someone else's rights. We reserve the right to remove content and suspend or terminate accounts that violate this policy, including via user reports.",
      "Stories, quotes, artwork, and other content we publish in the app remain the property of StoryPlugs or our licensors and may not be redistributed without permission.",
    ],
  },
  {
    heading: "Subscriptions & Billing",
    body: [
      "StoryPlugs Premium is offered as an auto-renewing subscription, billed through the Apple App Store or Google Play, depending on your device.",
      "Your subscription automatically renews unless you cancel at least 24 hours before the end of the current period. You can manage or cancel your subscription at any time through your App Store or Google Play account settings — we cannot process cancellations or refunds directly.",
      "Refunds are handled according to Apple's and Google's own refund policies, not by StoryPlugs directly.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "You may delete your account at any time from within the app. We may suspend or terminate your account if you violate these Terms.",
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "StoryPlugs is provided \"as is\" without warranties of any kind. We do not guarantee the app will be uninterrupted or error-free.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, StoryPlugs is not liable for any indirect, incidental, or consequential damages arising from your use of the app.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of StoryPlugs after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "Questions about these Terms? Email us at hello@storyplugs.com.",
    ],
  },
];
