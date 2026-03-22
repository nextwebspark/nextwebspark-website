import {
  Code2,
  ShieldCheck,
  Clock,
  Lightbulb,
  Award,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "10+ Years Engineering",
    description:
      "A decade of software development experience means we build AI systems that are robust, maintainable, and production-ready.",
  },
  {
    icon: Award,
    title: "Claude Certified Architect",
    description:
      "Deep expertise in Anthropic's Claude AI — we know how to harness its full potential for your business use cases.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Quality",
    description:
      "Every system we build includes error handling, monitoring, testing, and documentation. No prototypes passed off as products.",
  },
  {
    icon: Lightbulb,
    title: "Business-First Approach",
    description:
      "We start with your business goals, not the technology. The right AI solution is the one that drives measurable ROI.",
  },
  {
    icon: Clock,
    title: "Fast Time-to-Value",
    description:
      "Our proven process gets you from idea to running system in weeks, not months. Start seeing results quickly.",
  },
  {
    icon: Users,
    title: "Training & Enablement",
    description:
      "We do not just build and leave. We train your team, transfer knowledge, and ensure you can operate and evolve your AI systems.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Why NextWebSpark</span>
          <h2 className="section-title">
            Built by Engineers,{" "}
            <span className="gradient-text">Driven by Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We combine deep technical expertise with a relentless focus on
            business outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-primary-100 flex items-center justify-center">
                <reason.icon size={22} className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
