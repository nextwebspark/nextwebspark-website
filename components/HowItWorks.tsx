import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description:
      "We audit your workflows, identify automation opportunities, and map out the highest-impact AI wins for your business.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build & Test",
    description:
      "Our team designs, develops, and rigorously tests your AI solution — ensuring it handles edge cases and integrates with your existing tools.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deploy & Scale",
    description:
      "We deploy to production with monitoring in place, train your team, and continuously optimise performance as your business grows.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-slate-50" id="how-it-works">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">
            From Idea to{" "}
            <span className="gradient-text">Production</span> in Weeks
          </h2>
          <p className="section-subtitle mx-auto">
            A proven three-step process that turns your automation goals into
            running systems — with zero disruption to your current operations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-300 to-primary-100" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600 mb-6 shadow-lg shadow-primary-600/25">
                  <step.icon size={28} className="text-white" />
                </div>

                {/* Number */}
                <div className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
