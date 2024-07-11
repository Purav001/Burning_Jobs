import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header1";
import Footer from "@/components/footer/footer";
import Providers from "@/components/Providers";
import DrawerButton from "@/components/DrawerButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burning Jobs",
  description: "Unit of Exemplar Global Resources Pvt Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen w-full flex flex-col">
          
            <Header />
            {children}
            <Footer />
          
          </div>
        </Providers>
        </body>
    </html>
  );
}
