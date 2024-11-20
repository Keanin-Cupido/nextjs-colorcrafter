import {
  Droplets,
  Image,
  Share2,
  Shuffle,
  Palette,
  Download,
} from "lucide-react";

const features = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Multiple Input Methods",
    description: "Use color pickers, upload images, or choose from presets",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Advanced Color Schemes",
    description: "Generate complementary, analogous, and more color combinations",
  },
  {
    icon: <Image className="h-6 w-6" />,
    title: "Extract from Images",
    description: "Pull color palettes from your favorite images instantly",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share your palettes with a simple URL or export to various formats",
  },
  {
    icon: <Shuffle className="h-6 w-6" />,
    title: "Random Generation",
    description: "Get inspiration with randomly generated color schemes",
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Export Options",
    description: "Export to CSS, Tailwind, JSON, and more formats",
  },
];

export function Features() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful Features for Color Enthusiasts
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}