"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { colord } from "colord";

export function ColorTools() {
  const [color, setColor] = useState("#FF6B6B");
  const colorObj = colord(color);

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">Color Tools</h3>
      <div className="grid gap-6">
        <div>
          <Label>Color Preview</Label>
          <div
            className="h-20 rounded-lg mt-2"
            style={{ backgroundColor: color }}
          />
        </div>

        <div className="grid gap-4">
          <div>
            <Label>HEX</Label>
            <Input
              value={colorObj.toHex()}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div>
            <Label>RGB</Label>
            <Input value={colorObj.toRgbString()} readOnly />
          </div>

          <div>
            <Label>HSL</Label>
            <Input value={colorObj.toHslString()} readOnly />
          </div>
        </div>

        {/* <div>
          <Label>Contrast Ratio with White</Label>
          <div className="mt-2 font-mono" aria-live="polite" role="status">
            {colorObj.isValid() ? colorObj.contrast("#ffffff").toFixed(2) : "Invalid color"}:1
          </div>
        </div> */}
      </div>
    </Card>
  );
}