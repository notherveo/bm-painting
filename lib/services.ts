export const services = [
  {
    id: "interior",
    title: "Interior Painting",
    description:
      "Fresh, even coverage on walls, ceilings, and trim. We prep carefully, protect your furniture, and leave your home looking brand new.",
    icon: "palette",
    price: "From $3.50/sq ft",
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description:
      "Weather-resistant finishes that protect and beautify your home's exterior. We work efficiently and leave your property spotless.",
    icon: "sun",
    price: "From $4.25/sq ft",
  },
  {
    id: "cabinets",
    title: "Cabinets & Trim",
    description:
      "A touch of color transforms kitchens and bathrooms. We paint cabinets, doors, baseboards, and crown molding with a smooth, durable finish.",
    icon: "layers",
    price: "From $2.75/sq ft",
  },
  {
    id: "color",
    title: "Color Consultation",
    description:
      "Not sure which hue suits your space? We bring sample palettes and professional advice to help you choose colors that feel right.",
    icon: "eye",
    price: "$150 / 2-hour session",
  },
  {
    id: "wallpaper",
    title: "Wallpaper & Accent Walls",
    description:
      "Add texture and personality with a single accent wall or full-room wallpaper. We handle prep, hanging, and cleanup.",
    icon: "sparkles",
    price: "From $3.00/sq ft",
  },
  {
    id: "stain",
    title: "Deck & Fence Staining",
    description:
      "Protect outdoor wood with beautiful, weather-resistant stains. We apply evenly and let the natural grain shine through.",
    icon: "shield",
    price: "From $3.75/sq ft",
  },
];

export const serviceIcons: Record<string, string> = {
  palette:
    "M12 2L2 22h20L12 2z M12 12l5-5 M12 12l-5 5",
  sun:
    "M12 2v20 M2 12h20 M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z",
  layers:
    "M12 2l8 4v12l-8 4-8-4V6l8-4z M12 10l8 4 M12 10l-8 4",
  eye:
    "M12 4v16 M4 12h16 M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z",
  sparkles:
    "M12 2l8 4v12l-8 4-8-4V6l8-4z M12 10l8 4 M12 10l-8 4",
  shield:
    "M12 2l8 4v12l-8 4-8-4V6l8-4z M12 10l8 4 M12 10l-8 4",
};

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}
