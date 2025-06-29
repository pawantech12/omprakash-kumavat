import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Omprakash Kumavat - Professional Civil Contractor | Construction Services",
  description:
    "Expert civil contractor offering plumbing, lighting, furniture, tiling, granite, and POP services. Quality construction solutions with years of experience.",
  keywords:
    "civil contractor, construction, plumbing, lighting, furniture, tiling, granite, POP, building contractor",
  authors: [{ name: "Omprakash Kumavat" }],
  openGraph: {
    title: "Omprakash Kumavat - Professional Civil Contractor",
    description:
      "Expert civil contractor offering comprehensive construction services",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
