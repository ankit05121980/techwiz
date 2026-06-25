import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0a66c2",
    icons: [
      { src: "/logo.png", sizes: "333x410", type: "image/png" },
    ],
  };
}
