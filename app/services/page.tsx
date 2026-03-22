import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Workflow,
  GraduationCap,
  Target,
  Megaphone,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI Services for Business Growth",
  description:
    "From AI consulting and agent development to training and automation — explore how NextWebSpark helps SMEs and enterprises grow with AI.",
};

const services = [
  {
    id: "consulting",
    icon: Bot,
    title: "AI Consulting & Strategy",
    subtitle: "Know exactly where AI will make the biggest impact",
    description:
      "Not every process needs AI, and not every AI tool is the right fit. We audit your operations, identify the highest-ROI automation opportunities, and create a phased roadmap that aligns with your budget and goals.",
    features: [
      "Workflow audit and automation opportunity mapping",
      "AI readiness assessment for your team and data",
      "Technology selection (Claude, GPT, open-source models)",
      "Phased implementation roadmap with ROI projections",
      "Vendor-neutral recommendations — we pick what works best for you",
    ],
    color: "from-primary-500 to-primary-600",
  },
  {
    id: "agents",
    icon: Bot,
    title: "AI Agent Development",
    subtitle: "Custom AI agents built for your workflows",
    description:
      "We build production-grade AI agents that handle complex tasks autonomously. From single-purpose assistants to multi-agent systems that collaborate and reason — designed, tested, and deployed for your specific use case.",
    features: [
      "Single and multi-agent AI systems (Claude, LangGraph, CrewAI)",
      "RAG systems with your proprietary knowledge base",
      "Tool-use agents that interact with your APIs and databases",
      "Human-in-the-loop workflows for critical decisions",
      "Full testing, monitoring, and production deployment",
    ],
    color: "from-primary-500 to-primary-600",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "AI Training & Workshops",
    subtitle: "Upskill your team to work alongside AI",
    description:
      "Hands-on training programmes tailored to your industry and skill level. From executive AI literacy to developer workshops on building production AI systems — we make your team confident and capable.",
    features: [
      "Executive AI strategy sessions",
      "Prompt engineering for business teams",
      "Developer workshops: building AI agents and RAG systems",
      "n8n and automation platform training",
      "Custom curriculum aligned to your tech stack",
    ],
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "lead-gen",
    icon: Target,
    title: "Lead Generation AI",
    subtitle: "Never miss another opportunity",
    description:
      "AI-powered lead processing that scores, enriches, and routes prospects to your sales team in minutes, not hours. Automated outreach sequences that feel personal at scale.",
    features: [
      "Automated lead scoring and qualification",
      "Data enrichment from multiple sources",
      "Intelligent CRM routing and assignment",
      "Personalised outreach sequence generation",
      "Real-time lead alerts and notifications",
    ],
    color: "from-rose-500 to-rose-600",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing & Content AI",
    subtitle: "On-brand content at scale",
    description:
      "Generate blog posts, social media content, email campaigns, and ad copy that sounds like you — not a robot. AI systems trained on your brand voice, audience, and goals.",
    features: [
      "AI content generation trained on your brand guidelines",
      "Social media automation and scheduling",
      "Email campaign personalisation at scale",
      "SEO-optimised content production",
      "Performance analytics and A/B testing",
    ],
    color: "from-violet-500 to-violet-600",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Customer Support AI",
    subtitle: "Resolve tickets faster with less effort",
    description:
      "Intelligent support agents that answer customer questions from your knowledge base, categorise and route tickets, and escalate complex issues — reducing response times by up to 60%.",
    features: [
      "AI chatbot trained on your documentation and FAQs",
      "Automatic ticket categorisation and routing",
      "Email auto-response with RAG-powered answers",
      "Seamless human handoff for complex issues",
      "Multilingual support capabilities",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label !text-primary-400">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-balance">
            AI Solutions Tailored to{" "}
            <span className="gradient-text">Your Business</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We don&apos;t sell one-size-fits-all AI. Every solution is designed
            around your specific workflows, team, and goals.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-6`}
                  >
                    <service.icon size={28} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-lg text-primary-600 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link href="/contact" className="btn-primary">
                    Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>

                {/* Features */}
                <div className="flex-1 bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-5">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <CheckCircle
                          size={20}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
