import { Gowun_Dodum } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "진형 🤍 예주 결혼합니다",
  description: "사랑스런 연지의 첫 돌잔치에 초대합니다.",
  openGraph: {
    title: "진형 🤍 예주 결혼합니다",
    type: "website",
    siteName: "진형 🤍 예주 결혼합니다",
    description: "사랑스런 연지의 첫 돌잔치에 초대합니다.",
  },
};

const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-gowun-dodum",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${gowunDodum.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
