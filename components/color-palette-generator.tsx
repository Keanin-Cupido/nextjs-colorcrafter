"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { colord } from "colord";

export function ColorPaletteGenerator() {
  const [colors, setColors] = useState<string[]>(["#FF6B6B", "#4ECDC4"]);

  const addColor = () => {
    setColors([...colors, "#000000"]);
  };

  const removeColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const updateColor = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toast.success("Color copied to clipboard");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Color Palette</h2>
        <Button onClick={addColor} disabled={colors.length >= 10}>
          <Plus className="mr-2 h-4 w-4" />
          Add Color
        </Button>
      </div>

      <div className="grid gap-4">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-lg shadow-sm"
              style={{ backgroundColor: color }}
            />
            <Input
              type="color"
              value={color}
              onChange={(e) => updateColor(index, e.target.value)}
              className="w-16"
            />
            <Input
              type="text"
              value={color}
              onChange={(e) => updateColor(index, e.target.value)}
              className="font-mono"
            />
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyColor(color)}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeColor(index)}
                disabled={colors.length <= 2}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="harmony">
        <TabsList>
          <TabsTrigger value="harmony">Color Harmony</TabsTrigger>
          <TabsTrigger value="shades">Shades & Tints</TabsTrigger>
        </TabsList>
        <TabsContent value="harmony" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => {
                const base = colord(colors[0]);
                setColors([
                  base.toHex(),
                  base.rotate(180).toHex(),
                ]);
              }}
            >
              Complementary
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const base = colord(colors[0]);
                setColors([
                  base.toHex(),
                  base.rotate(120).toHex(),
                  base.rotate(240).toHex(),
                ]);
              }}
            >
              Triadic
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="shades" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => {
                const base = colord(colors[0]);
                setColors([
                  base.darken(0.2).toHex(),
                  base.toHex(),
                  base.lighten(0.2).toHex(),
                ]);
              }}
            >
              Generate Shades
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const base = colord(colors[0]);
                setColors([
                  base.saturate(0.2).toHex(),
                  base.toHex(),
                  base.desaturate(0.2).toHex(),
                ]);
              }}
            >
              Adjust Saturation
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}