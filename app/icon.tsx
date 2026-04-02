import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  // Read raw PNG bytes and convert to base64 data URL at build/request time
  const logoPath = path.join(process.cwd(), "public", "logo-akeguno.png");
  const buffer = readFileSync(logoPath);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "transparent",
        }}
      >
        {/* Scale up 2.5x from center to crop out transparent padding */}
        <img
          src={dataUrl}
          style={{
            width: "130%",
            height: "130%",
            objectFit: "none",
            objectPosition: "center center",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
