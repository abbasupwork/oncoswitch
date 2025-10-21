import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "OncoSwitch - AI-Powered DNA Switch Designer",
  description: "Revolutionary AI platform for DNA switch design. Next generation personalized gene therapy for cancer treatment.",
  keywords: [
    "DNA switches",
    "AI design",
    "biotechnology",
    "oncology research",
    "gene therapy",
    "personalized medicine",
    "molecular biology",
    "bioinformatics",
    "cancer treatment",
    "genetic engineering"
  ],
  authors: [{ name: "OncoSwitch Team" }],
  creator: "OncoSwitch",
  publisher: "OncoSwitch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oncoswitch.ai'),
  alternates: {
    canonical: '/',
  },
         openGraph: {
           title: "OncoSwitch - AI-Powered DNA Switch Designer",
           description: "Revolutionary AI platform for DNA switch design. Next generation personalized gene therapy.",
    url: 'https://oncoswitch.ai',
    siteName: 'OncoSwitch',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OncoSwitch - AI-Powered DNA Switch Designer',
      },
    ],
           locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "OncoSwitch - AI-Powered DNA Switch Designer",
    description: "Revolutionary AI platform for DNA switch design. Next generation personalized gene therapy.",
    images: ['/og-image.jpg'],
    creator: '@oncoswitch',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
