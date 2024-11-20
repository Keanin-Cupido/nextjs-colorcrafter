const recentPalettes = [
  {
    name: "Ocean Breeze",
    colors: ["#48CAE4", "#90E0EF", "#ADE8F4", "#CAF0F8", "#023E8A"],
  },
  {
    name: "Sunset Vibes",
    colors: ["#FFB703", "#FB8500", "#023047", "#219EBC", "#8ECAE6"],
  },
  {
    name: "Forest Dream",
    colors: ["#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2"],
  },
];

export function RecentPalettes() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Recently Created Palettes
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentPalettes.map((palette, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="h-32 grid grid-cols-5">
              {palette.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  style={{ backgroundColor: color }}
                  className="h-full"
                />
              ))}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{palette.name}</h3>
              <div className="flex flex-wrap gap-2">
                {palette.colors.map((color, colorIndex) => (
                  <code key={colorIndex} className="text-xs">
                    {color}
                  </code>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}