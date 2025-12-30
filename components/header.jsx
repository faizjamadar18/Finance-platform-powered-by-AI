
import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { NAV_LINKS } from "@/data/footer";
import HomeNavLinks from "./navlink";


const Header = async () => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full z-50 py-4 px-1 md:px-32">
      <nav className="container bg-background/50 rounded-full px-6 py-3 flex items-center justify-between shadow-md border-2 backdrop-blur-2xl">

        <Link href="/" className={`flex items-center gap-2 group`}>
          <img src="/logo.png" className="md:h-10 h-8 w-auto" alt="logo" />
        </Link>



        <HomeNavLinks/>

        <div className="flex-1" />
        <div className="flex items-center space-x-2">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button
                variant="outline"
                size={"sm"}
                className="border-2 text-white hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <LayoutDashboard  />
                <span className="hidden xl:inline ">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button 
                  className="flex items-center bg-black text-white shadow-md hover:shadow-lg transition-all duration-200"
                  size={"sm"}
              >
                <PenBox />
                <span className="hidden xl:inline">Add Transaction</span>
              </Button>
            </a>

          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-2 hover:border-black hover:bg-blue-50/50 transition-all duration-500"
              >
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-2 ring-blue-200 hover:ring-blue-400",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;