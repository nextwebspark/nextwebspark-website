import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free AI strategy call with NextWebSpark. Let's discuss how AI agents and automation can grow your business.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label !text-primary-400">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-balance">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you need a full AI strategy, a single automation, or just
            want to explore what&apos;s possible — we&apos;re here to help.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Book a Free Strategy Call
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                In a 30-minute call, we&apos;ll audit your current workflows,
                identify the highest-impact automation opportunities, and map
                out a clear plan — with no obligation. You&apos;ll walk away
                with actionable insights whether you work with us or not.
              </p>

              {/* What to expect */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">
                  What to expect:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Quick review of your current processes and pain points",
                    "Identification of the top 3 automation opportunities",
                    "Recommended AI tools and approach for your use case",
                    "Rough timeline and investment range",
                    "Honest assessment — if AI isn't the answer, we'll tell you",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-emerald-500 mt-0.5 shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={20} className="text-primary-600" />
                  <a
                    href="mailto:alok.kumar@nextwebspark.com"
                    className="hover:text-primary-600 transition-colors"
                  >
                    alok.kumar@nextwebspark.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-primary-600" />
                  <span>Ireland</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock size={20} className="text-primary-600" />
                  <span>Typically respond within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
