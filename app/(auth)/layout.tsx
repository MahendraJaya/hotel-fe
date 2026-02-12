import type { Metadata } from "next";
import {Poppins } from "next/font/google";

import "../globals.css";
import QueryProvider from "@/app/lib/queryprovider";

const inter = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Front Desk",
  description: "Simple Front Desk App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ ${inter.className} antialiase`}>
        <div className="flex min-h-screen bg-primary-light items-center justify-center">
          <div className="">
            <QueryProvider>{children}</QueryProvider>
          </div>
        </div>
        
      </body>
    </html>
  );
}
