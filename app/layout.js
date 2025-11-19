import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";
import Link from "next/link";
import Logo from "@/components/logo";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Finance",
  description: "Your AI Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}  >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="relative bg-[#172136]">
            <div className="container mx-auto px-4 py-12">
              {/* Bottom Bar */}
              <div className="">
                <div className="flex justify-center">
                  <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Faiz. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
