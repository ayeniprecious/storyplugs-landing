import Image from "next/image";
import {
  BookmarkPlus,
  Flame,
  Heart,
  MessageCircle,
  Quote,
  Sun,
} from "lucide-react";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { StoreBadges } from "./components/store-badges";

const FEATURES = [
  {
    icon: Sun,
    title: "A story every day",
    description: "No doomscrolling, just five honest minutes.",
  },
  {
    icon: Flame,
    title: "Build a streak",
    description: "Read daily and watch your streak grow.",
  },
  {
    icon: Quote,
    title: "Real quotes, real people",
    description:
      "Every quote is genuinely attributed to a real person — no AI filler, ever.",
  },
  {
    icon: BookmarkPlus,
    title: "Save & organize",
    description:
      "Bookmark stories into your own folders and pick up right where you left off.",
  },
  {
    icon: MessageCircle,
    title: "A kind community",
    description:
      "Comment and reply on the stories that move you — moderated to stay kind.",
  },
  {
    icon: Heart,
    title: "Mood-matched picks",
    description:
      "Tell us how you're feeling and get a set of stories picked to match.",
  },
];

const CATEGORIES = [
  "Kindness",
  "Family",
  "Faith",
  "Forgiveness",
  "Hope",
  "Community",
  "Children",
  "Everyday Heroes",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 text-center sm:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--brand-glow)" }}
          />
          <Image
            src="/logo-mark.png"
            alt="StoryPlugs"
            width={84}
            height={84}
            priority
            className="mx-auto mb-8 rounded-full"
          />
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            A little kindness,
            <br />
            <span className="text-brand">every day.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            A short story every day — kindness, hope, forgiveness, and the
            quiet moments that remind you people are good.
          </p>
          <div id="download" className="mt-10 flex justify-center">
            <StoreBadges />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for a better daily habit
            </h2>
            <p className="mt-4 text-muted">
              Built to be honest, calm, and genuinely worth returning to.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-2xl border border-border bg-card px-6 py-10 text-center sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Stories across every kind of moment
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start your streak today.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            StoryPlugs is heading to the App Store and Google Play soon.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreBadges />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
