import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt="StoryPlugs"
            width={22}
            height={22}
            className="rounded-full opacity-80"
          />
          <span>&copy; {new Date().getFullYear()} StoryPlugs. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <a href="mailto:hello@storyplugs.com" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
