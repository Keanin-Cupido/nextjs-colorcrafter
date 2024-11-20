"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

const initialColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
];

export function ColorDemo() {
  const [colors] = useState(initialColors);

  return (
    <Card className="p-6 bg-card">
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="mt-6 space-y-4">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className="w-8 h-8 rounded"
              style={{ backgroundColor: color }}
            />
            <code className="text-sm font-mono">{color}</code>
          </div>
        ))}
      </div>
    </Card>
  );
}