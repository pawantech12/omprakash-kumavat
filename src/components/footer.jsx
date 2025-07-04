"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function Footer() {
  return (
    <motion.footer
      className="bg-slate-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">OK</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Omprakash Kumavat</h3>
                <p className="text-sm text-slate-400">Civil Contractor</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Professional civil contractor with 15+ years of experience in
              delivering quality construction solutions. Your trusted partner
              for all construction needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => smoothScrollTo(link.href)}
                    className="text-slate-400 hover:text-blue-500 transition-colors text-left"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Plumbing Services",
                "Electrical & Lighting",
                "Furniture Work",
                "Tiling Services",
                "Granite Work",
                "POP & Ceiling",
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 hover:text-green-500 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <Link href="tel:+919820585835" className="text-slate-400">
                    +91 9820585835
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <Link
                    href="mailto:omparkashkumawat.smpr@gmail.com"
                    className="text-slate-400"
                  >
                    omparkashkumawat.smpr@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">
                    Flatno.102, Arunoday residency, Jai Malhar, Bapgoan,
                    Maharashtra 421302
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Omprakash Kumavat. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-purple-500 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-purple-500 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
