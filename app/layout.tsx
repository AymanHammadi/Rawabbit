import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const rubik = Rubik({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "روابط",
  description: "المواقع والتطبيقات التي تحتاجها في مكان واحد",
  icons: {
    icon: "./public/assets/images/rawabbit-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={rubik.variable}>
        
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
