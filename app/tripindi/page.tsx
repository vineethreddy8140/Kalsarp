import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tripindi Shradha (Pitru Dosha) vidhi at Trimbakeshwar",
  description:
    "Tripindi Shraddha is performed to remove certain ancestral doshas and to bring peace to the departed souls.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Tripindi Shraddha</h1>

      <p style={{ lineHeight: 1.7 }}>
        Tripindi Shraddha is performed as an offering in the memory of ancestors. It is done to
        reduce certain Pitru-related doshas and help bring peace.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        It is traditionally performed following specific rites and timings, and people perform it
        when advised based on family circumstances or beliefs.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        For best results, Muhurta (auspicious dates) are usually followed.
      </p>
    </div>
  );
}
