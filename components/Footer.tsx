import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { name: "AI Consulting", href: "/services#consulting" },
    { name: "AI Agent Development", href: "/services#agents" },
    { name: "AI Training", href: "/services#training" },
    { name: "Lead Generation AI", href: "/services#lead-gen" },
    { name: "Customer Support AI", href: "/services#support" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container-main section-padding !pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-white">
                NextWeb<span className="text-primary-400">Spark</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Helping SMEs and enterprises grow with production-grade AI agents,
              automation systems, and expert training.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400 shrink-0" />
                <span>Ireland</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400 shrink-0" />
                <a
                  href="mailto:alok.kumar@nextwebspark.com"
                  className="hover:text-white transition-colors"
                >
                  alok.kumar@nextwebspark.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Ready to automate?
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Book a free strategy call and discover how AI can transform your
              operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
            >
              Get Started <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} NextWebSpark Limited. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Official n8n Verified Creator</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
