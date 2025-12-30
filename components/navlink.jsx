"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/data/footer";

export default function HomeNavLinks() {
  const pathname = usePathname();

  // show only on home page
  if (pathname !== "/") return null;

  return (
    <div className="lg:flex items-center hidden gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {NAV_LINKS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors px-3 py-1.5"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
