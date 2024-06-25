import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CloudBOX | Responsive Bootstrap 4 Admin Dashboard Template",


 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}
     
  
      </body>
    </html>
  );
}
