import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Finance",
  description: "Your AI Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html lang="en" className="dark">
        <body className={`${inter.className}`}  >
          <Header />
          <main className="">{children}</main>
          <Toaster richColors />
        </body>

      </html>
    </ClerkProvider>
  );
}
