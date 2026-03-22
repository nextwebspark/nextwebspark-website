import {
  Bot,
  Workflow,
  GraduationCap,
  Target,
  Megaphone,
  Headphones,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom AI agents built for your specific workflows. From single-purpose bots to complex multi-agent systems using Claude, LangGraph, and CrewAI.",
    href: "/services#agents",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect your tools and eliminate manual work. We build intelligent automations using n8n, Zapier, and Make with AI decision-making baked in.",
    href: "/services#automation",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Workshops",
    description:
      "Upskill your team with hands-on AI training. From prompt engineering to building production AI systems — tailored to your industry.",
    href: "/services#training",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Target,
    title: "Lead Generation AI",
    description:
      "Automatically score, enrich, and route leads to your sales team. AI-powered prospecting that works around the clock so you never miss an opportunity.",
    href: "/services#lead-gen",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Megaphone,
    title: "Marketing & Content AI",
    description:
      "Generate on-brand content, automate social media, and personalise campaigns at scale. AI that understands your voice and audience.",
    href: "/services#marketing",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Headphones,
    title: "Customer Support AI",
    description:
      "Intelligent support agents that resolve tickets, answer questions from your knowledge base, and escalate complex issues — cutting response times by 60%.",
    href: "/services#support",
    color: "from-cyan-500 to-cyan-600",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            AI Solutions That{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From strategy to deployment, we deliver AI systems that solve real
            business problems and generate measurable ROI.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card group cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <span className="inline-flex items-center mt-4 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
