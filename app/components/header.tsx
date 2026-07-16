import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt="StoryPlugs"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-lg font-bold tracking-tight">StoryPlugs</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="/#features" className="hidden sm:inline hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#download" className="hidden sm:inline hover:text-foreground transition-colors">
            Download
          </Link>
          <Link
            href="/#download"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Get the App
          </Link>
        </nav>
      </div>
    </header>
  );
}
