import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-dark section-padding">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-balance">
            Not Sure Where to Start?{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200">
              That&apos;s Exactly What We&apos;re Here For.
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll audit your
            workflows, identify the biggest automation wins, and map out a plan
            — no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Book Your Free Strategy Call
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/blog"
              className="btn-secondary-dark text-base"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
