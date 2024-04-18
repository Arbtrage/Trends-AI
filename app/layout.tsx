import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { TickerProvider } from "@/context/TickerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Textify.ai",
  description: "Generated by create next app",
  icons: {
    icon: "/bot.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <TickerProvider>
            {children}
          </TickerProvider >
        </Provider>
      </body>
    </html>
  );
}
