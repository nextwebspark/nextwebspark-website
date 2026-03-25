import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NextWebSpark is an AI consulting and development agency helping SMEs and enterprises transform their operations with production-grade AI agents and automation.",
};

const timeline = [
  {
    icon: Code2,
    year: "2016+",
    title: "Software Engineering Foundation",
    description:
      "Over a decade of building production systems across multiple industries — from startups to enterprise. Deep expertise in full-stack development, APIs, and system architecture.",
  },
  {
    icon: Briefcase,
    year: "2024",
    title: "NextWebSpark Founded",
    description:
      "Launched NextWebSpark to bridge the gap between AI potential and business reality. Focused on helping SMEs and enterprises adopt AI that actually delivers measurable results.",
  },
  {
    icon: Award,
    year: "2025",
    title: "n8n Verified Creator",
    description:
      "Recognised as an official n8n verified creator for building high-quality automation workflows and sharing expertise with the community.",
  },
  {
    icon: GraduationCap,
    year: "2026",
    title: "Anthropic Certified Claude Expert",
    description:
      "Completed Anthropic's Skilljar certification programme, demonstrating deep expertise in building enterprise-grade AI systems with Claude.",
  },
];

const values = [
  {
    title: "Business Impact First",
    description:
      "We measure success by your ROI, not by how clever the technology is. Every solution is justified by business outcomes.",
  },
  {
    title: "Production or Nothing",
    description:
      "We don't build demos and walk away. Every system we deliver is production-grade with monitoring, error handling, and documentation.",
  },
  {
    title: "Knowledge Transfer",
    description:
      "We train your team alongside every engagement. Our goal is to make you self-sufficient, not dependent on us.",
  },
  {
    title: "Honest Guidance",
    description:
      "If AI isn't the right solution for a problem, we'll tell you. We recommend what works, not what generates the biggest invoice.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label !text-primary-400">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Engineers Who Speak{" "}
              <span className="gradient-text">Business</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              NextWebSpark was founded on a simple belief: AI should solve real
              business problems, not create new ones. We combine over a decade
              of software engineering expertise with cutting-edge AI to help
              companies grow faster, operate leaner, and serve customers
              better.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">
              Making AI{" "}
              <span className="gradient-text">Accessible & Actionable</span>{" "}
              for Every Business
            </h2>
            <p className="section-subtitle mx-auto">
              Most businesses know AI could help them. Few know where to start
              or whom to trust. We exist to close that gap — providing the
              strategy, systems, and training that turn AI from a buzzword into
              a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">
              A Decade of <span className="gradient-text">Building</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/25">
                      <item.icon size={22} className="text-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-12 bg-primary-200 mx-auto mt-3" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <CheckCircle
                  size={22}
                  className="text-emerald-500 shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
