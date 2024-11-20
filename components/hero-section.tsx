"use client";

import { Button } from "@/components/ui/button";
import { Palette, Wand2 } from "lucide-react";
import Link from "next/link";
import { ColorDemo } from "./color-demo";

export function HeroSection() {
  return (
    <section className="relative py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Create stunning color palettes with{" "}
            <span className="text-primary">ColorCrafter</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional color palette generator with advanced features for
            designers and developers. Generate, customize, and export beautiful
            color schemes in seconds.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/create">
                <Palette className="mr-2 h-5 w-5" />
                Create Palette
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Wand2 className="mr-2 h-5 w-5" />
              Generate Random
            </Button>
          </div>
        </div>
        <div className="relative">
          <ColorDemo />
        </div>
      </div>
    </section>
  );
}