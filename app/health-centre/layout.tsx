import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Health Centre | Obafemi Awolowo University",
  description: "Official medical services and appointment portal for Great Ife students and staff.",
  keywords: ["OAU", "Health Centre", "Ile-Ife", "Student Health", "TISHIP"],
  openGraph: {
    title: "OAU Health Services",
    description: "For Learning and Culture - Medical Portal",
    url: "https://oau-web.vercel.app",
    siteName: "OAU Health Centre",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
