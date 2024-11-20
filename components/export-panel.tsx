"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Download, Link2 } from "lucide-react";
import { toast } from "sonner";

export function ExportPanel() {
  const handleExport = () => {
    toast.success("Colors exported successfully!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-semibold">Export</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Format</Label>
          <Select defaultValue="css">
            <SelectTrigger>
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="css">CSS Variables</SelectItem>
              <SelectItem value="tailwind">Tailwind Config</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <Button variant="outline" className="w-full" onClick={handleCopyLink}>
          <Link2 className="mr-2 h-4 w-4" />
          Copy Link
        </Button>
      </div>
    </Card>
  );
}