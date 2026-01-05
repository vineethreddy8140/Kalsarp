import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 Muhurata Dates for Narayan Nagbali, Kalsarpa, Tripindi - Trimbakeshwar",
  description:
    "Muhurta dates list (Year 2025). Update this table easily later as needed.",
};

const MUHURTAS_2025 = [
  {
    month: "April",
    kalsarpa: "2, 5, 6, 7, 10, 12, 13, 14, 18, 20, 21, 24, 26, 27, 30",
    narayan: "3, 6, 9, 12, 16, 19, 22, 27, 30",
  },
  {
    month: "May",
    kalsarpa: "1, 3, 4, 5, 7, 9, 11, 12, 15, 17, 18, 20, 22, 24, 25, 27, 31",
    narayan: "4, 7, 10, 13, 16, 19, 25, 28, 31",
  },
  {
    month: "June",
    kalsarpa: "1, 3, 5, 8, 10, 14, 15, 16, 19, 22, 23, 25, 28, 29",
    narayan: "3, 7, 12, 15, 21, 24, 27, 30",
  },
  {
    month: "July",
    kalsarpa: "3, 6, 7, 10, 12, 13, 14, 15, 18, 20, 21, 24, 27, 28, 29, 30",
    narayan: "4, 7, 12, 18, 21, 25, 31",
  },
  {
    month: "August",
    kalsarpa: "1, 3, 4, 6, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 22, 23, 24, 26, 28, 30, 31",
    narayan: "4, 9, 14, 17, 21, 24",
  },
  {
    month: "September",
    kalsarpa: "3, 5, 6, 7, 9, 12, 14, 15, 19, 21, 26, 28, 30",
    narayan: "2, 5, 10, 13, 16, 19, 27",
  },
  {
    month: "October",
    kalsarpa: "2, 4, 5, 6, 8, 12, 14, 18, 19, 20, 21, 24, 25, 26, 27, 29, 31",
    narayan: "2, 8, 11, 15, 24, 27, 30",
  },
  {
    month: "November",
    kalsarpa: "2, 5, 7, 9, 10, 12, 15, 16, 18, 20, 21, 23, 25, 28, 30",
    narayan: "5, 8, 11, 14, 17, 21, 26",
  },
  {
    month: "December",
    kalsarpa: "2, 4, 7, 9, 12, 13, 14, 17, 19, 20, 23, 25, 27, 28, 29, 31",
    narayan: "2, 5, 8, 11, 14, 19, 23, 29",
  },
];

export default function Page() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Muhurtas (Dates) — Year 2025</h1>
      <p style={{ lineHeight: 1.7 }}>
        Below is a clean, easy-to-update table. (You can add Jan–Mar later if needed.)
      </p>

      <div style={{ overflowX: "auto", marginTop: 16 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
          <thead>
            <tr>
              <th style={th}>Month</th>
              <th style={th}>Kalsarpa Dates</th>
              <th style={th}>Narayan Nagbali Dates</th>
            </tr>
          </thead>
          <tbody>
            {MUHURTAS_2025.map((row) => (
              <tr key={row.month}>
                <td style={td}><strong>{row.month}</strong></td>
                <td style={td}>{row.kalsarpa}</td>
                <td style={td}>{row.narayan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "1px solid #ddd",
  background: "#fafafa",
};

const td: React.CSSProperties = {
  verticalAlign: "top",
  padding: "10px",
  borderBottom: "1px solid #eee",
  lineHeight: 1.6,
};
