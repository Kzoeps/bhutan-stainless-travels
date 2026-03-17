import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bhutan Stainless Travels",
    short_name: "Bhutan Stainless Travels",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
      },
    ],
  }
}
