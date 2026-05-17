import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "진형 🤍 예주 결혼합니다",
  description: "진형 🤍 예주 결혼식에 초대합니다.",
  openGraph: {
    title: "진형 🤍 예주 결혼합니다",
    type: "website",
    siteName: "진형 🤍 예주 결혼합니다",
    description: "진형 🤍 예주 결혼식에 초대합니다.",
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
      <body
        className={`${suit.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="bottom-center" duration={2000} />
      </body>
    </html>
  );
}
