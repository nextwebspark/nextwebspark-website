import Link from "next/link";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </div>

      <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-600/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-300">
              Claude Partner &middot; n8n Verified Creator
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] text-balance">
            AI Agents That{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200">
              Grow Your Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build production-grade AI agents and automation systems that help
            SMEs and enterprises cut costs, boost revenue, and scale operations
            — from strategy to deployment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary text-base">
              Book a Free Strategy Call
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link href="/services" className="btn-secondary-dark text-base">
              Explore Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={20} className="text-emerald-400" />
                <span className="text-3xl font-black text-white">70%</span>
              </div>
              <span className="text-sm text-gray-500">Cost Reduction</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <Zap size={20} className="text-emerald-400" />
                <span className="text-3xl font-black text-white">10+</span>
              </div>
              <span className="text-sm text-gray-500">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <Shield size={20} className="text-emerald-400" />
                <span className="text-3xl font-black text-white">100%</span>
              </div>
              <span className="text-sm text-gray-500">Production-Grade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
