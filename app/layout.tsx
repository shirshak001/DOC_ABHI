import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drabhijitbiswas.in"),
  title: {
    default: "Dr. Abhijit Biswas | Senior Consultant Physician",
    template: "%s | Dr. Abhijit Biswas"
  },
  description:
    "Premium personal brand website for Dr. Abhijit Biswas, Senior Consultant Physician offering compassionate, evidence-based medical care.",
  keywords: [
    "Dr Abhijit Biswas",
    "Best Physician in Kolkata",
    "Internal Medicine Kolkata",
    "Diabetes doctor",
    "Preventive healthcare"
  ],
  openGraph: {
    title: "Dr. Abhijit Biswas | Compassionate Healthcare",
    description:
      "Trusted expertise, personalized treatment, and modern patient care.",
    url: "https://drabhijitbiswas.in",
    siteName: "Dr. Abhijit Biswas",
    images: [
      {
        url: "/images/dr-abhijit-biswas.png",
        width: 1536,
        height: 1024,
        alt: "Dr. Abhijit Biswas professional portrait"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Abhijit Biswas",
    description: "Senior Consultant Physician for premium patient-first care.",
    images: ["/images/dr-abhijit-biswas.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
