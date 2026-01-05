import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Trimbakeshwar Temple : Tryambakeshwar",
  description:
    "Information and services around Trimbakeshwar. Includes Abhishek, Pitru dosha, Narayanbali and more.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Trimbakeshwar</h1>

      <p style={{ lineHeight: 1.7 }}>
        Trambakeshwar (Trimbakeshwar) is an ancient Hindu temple in the town of Trimbak,
        in the Nashik District of Maharashtra. It is dedicated to Lord Shiva and is one
        of the twelve Jyotirlingaas.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        The temple is located near the source of the Godavari River and is considered a
        sacred place for darshan and rituals.
      </p>

      <div style={{ marginTop: 18 }}>
        <h2 style={{ fontSize: 18 }}>Popular services</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>KalSarpa Yog</li>
          <li>Narayan Nagbali</li>
          <li>Tripindi Shraddha</li>
          <li>Rudra Abhishek</li>
          <li>Mahamritunjay Jaap / Anusthan</li>
        </ul>
      </div>
    </div>
  );
}
