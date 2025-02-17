import "~/styles/globals.css";
import Navbar from "~/components/layout/Navbar";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Stock Bro",
  description: "Your AI-powered stock portfolio assistant",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} min-h-screen bg-background font-sans antialiased`}>
      <body>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
