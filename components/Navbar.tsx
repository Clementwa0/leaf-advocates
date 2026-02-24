"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

import { services } from "@/constants";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      pathname === href
        ? "text-slate-900 bg-slate-100"
        : "hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={40} height={40} alt="Leaf Advocates Logo" />
          <span className="font-semibold text-lg hidden sm:block">
            Leaf Advocates
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">

              <NavigationMenuItem>
                <Link href="/" className={linkStyle("/")}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className={linkStyle("/about")}>
                  About
                </Link>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="p-4 w-64 space-y-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/team" className={linkStyle("/team")}>
                  Team
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className={linkStyle("/contact")}>
                  Contact
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-slate-900 text-white hover:bg-slate-800 transition-colors">
            Book Consultation
          </Button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="h-6 w-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right" className="p-1">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6 text-base font-medium">
                <Link href="/" className={linkStyle("/")}>
                  Home
                </Link>
                <Link href="/about" className={linkStyle("/about")}>
                  About
                </Link>
                <div>
                  <p className="mb-2 font-semibold">Services</p>
                  <div className="flex flex-col gap-2 pl-4 border-l border-slate-200">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/team" className={linkStyle("/team")}>
                  Team
                </Link>
                <Link href="/contact" className={linkStyle("/contact")}>
                  Contact
                </Link>
                <Button className="mt-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                  Book Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}