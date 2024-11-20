"use client";

import { ColorPaletteGenerator } from "@/components/color-palette-generator";
import { ColorTools } from "@/components/color-tools";
import { ExportPanel } from "@/components/export-panel";

export default function CreatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr,300px] gap-8">
        <div className="space-y-8">
          <ColorPaletteGenerator />
          <ColorTools />
        </div>
        <ExportPanel />
      </div>
    </div>
  );
}