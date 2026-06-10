import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0b1220 0%, #0F172A 55%, #08437f 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #0A66C2, #8DC63F)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            TW
          </div>
          <div style={{ display: "flex", gap: 10, fontSize: 34, fontWeight: 700 }}>
            <span>TechWiz</span>
            <span style={{ color: "#8DC63F", fontWeight: 500 }}>STEM Academy</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
            Turning Curious Kids Into Future Innovators
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9aa6b8", maxWidth: 900 }}>
            Hands-on Robotics, AI, Coding & Electronics for Grade 3-12
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Robotics", "AI", "Coding", "Electronics", "IoT"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(141,198,63,0.15)",
                border: "1px solid rgba(141,198,63,0.4)",
                color: "#cde79b",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
