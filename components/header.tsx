import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Palette } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <Palette className="h-6 w-6" /> */}
          <Image src="/logo.svg" alt="ColorCrafter Logo" width={50} height={50} />
          <span className="font-bold text-xl">ColorCrafter</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/create">Create</Link>
          <Link href="/palettes">Palettes</Link>
          <Link href="/about">About</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}