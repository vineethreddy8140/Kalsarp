import type { Metadata } from "next";
import "./globals.css";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Container from "../components/Container";

export const metadata: Metadata = {
  title: "Trimbakeshwar Services",
  description: "Information site for Trimbakeshwar-related poojas and details."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>
          <Container>{children}</Container>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
