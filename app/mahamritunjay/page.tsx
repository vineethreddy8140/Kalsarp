import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahamritunjay Jaap/Anusthan at Trimbakeshwar",
  description:
    "Mahamritunjay Jaap/Anusthan is performed for health, protection, and peace with chanting of Mahamritunjay Mantra.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Mahamritunjay Jaap / Anusthan</h1>

      <p style={{ lineHeight: 1.7 }}>
        Mahamritunjay Jaap is performed with chanting of the Mahamritunjay Mantra.
        It is believed to support health, protection, and spiritual strength.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        People often perform it for well-being, peace of mind, and to reduce difficulties.
        It may be conducted as a structured Anusthan based on guidance.
      </p>
    </div>
  );
}
