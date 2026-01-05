import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distance From Trimbakeshwar to Shirdi Sai Baba",
  description:
    "Information about Shirdi (Sai Baba) and general overview for visitors from Trimbakeshwar.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Shirdi (Sai Baba)</h1>

      <p style={{ lineHeight: 1.7 }}>
        Shirdi is associated with Shri Sai Baba and is a well-known pilgrimage destination.
        Visitors often plan trips to Shirdi along with other holy places in the region.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        This page can be expanded with travel info, distance, route guidance, and temple details.
        (You can add images later.)
      </p>
    </div>
  );
}
