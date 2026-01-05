import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rudra Abhishek to Lord Trimbakeshwar",
  description:
    "Rudra Abhishek is a ritual where Panchamrut pooja is offered to Lord Shiva with Vedic hymns/mantras.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Rudra Abhishek</h1>

      <p style={{ lineHeight: 1.7 }}>
        Rudra Abhishek is a ritual where Panchamrut pooja is offered to Lord Shiva along with
        powerful hymns/mantras.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        It is believed to bring prosperity, fulfillment of desires, and help remove negativity.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        Panchamrut pooja traditionally includes Milk, Curd, Ghee, Honey, and Sugar.
      </p>

      <div style={{ marginTop: 16 }}>
        <h2 style={{ fontSize: 18 }}>Types (commonly mentioned)</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Rudra Abhishek</li>
          <li>Laghu-Rudra Abhishek</li>
          <li>Maha-Rudra Abhishek</li>
        </ul>
      </div>
    </div>
  );
}
