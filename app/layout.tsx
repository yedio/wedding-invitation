import localFont from "next/font/local";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jhyj-wedding.site"),
  title: "진형 🤍 예주 결혼합니다",
  description: "9월 12일 토요일 오전 11시 10분",
  openGraph: {
    title: "진형 🤍 예주 결혼합니다",
    type: "website",
    siteName: "진형 🤍 예주 결혼합니다",
    description: "9월 12일 토요일 오전 11시 10분",
    images: [
      {
        url: "/img/pictures/cover_2.jpg",
        width: 3072,
        height: 4608,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "진형 🤍 예주 결혼합니다",
    description: "9월 12일 토요일 오전 11시 10분",
    images: ["/img/pictures/cover_2.jpg"],
  },
};

const suit = localFont({
  src: "../public/fonts/SUIT-Variable.woff2",
  variable: "--font-suit",
  weight: "100 900",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${suit.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="bottom-center" duration={2000} />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
