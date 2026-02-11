import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./../../globals.css";
import Sidebar from "../ui/sidebar";
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
        <div className="flex">
          <Sidebar />
          <div className="bg-primary-light flex-1">
            <QueryProvider>{children}</QueryProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
