"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Leaf Advocates Logo"
              />
              <span className="text-white font-semibold text-lg">
                Leaf Advocates
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Providing trusted legal solutions with integrity,
              professionalism, and dedication to our clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["/", "/about", "/practice-areas", "/team", "/contact"].map(
                (link, i) => {
                  const labels = [
                    "Home",
                    "About",
                    "Practice Areas",
                    "Team",
                    "Contact",
                  ];
                  return (
                    <li key={link}>
                      <Link
                        href={link}
                        className="text-sm block py-1 hover:text-white transition-colors"
                      >
                        {labels[i]}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm block py-1 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Nairobi, Kenya</li>
              <li>+254 700 000 000</li>
              <li>info@leafadvocates.com</li>
              <li>Mon - Fri: 8:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
        <p className="text-slate-400 text-center sm:text-left">
          © {new Date().getFullYear()} Leaf Advocates. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}