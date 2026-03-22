import { FileText, Mail, Users } from "lucide-react";

const caseStudies = [
  {
    icon: FileText,
    title: "Invoice Processing AI",
    tech: "LangGraph + CrewAI",
    stat: "95%",
    statLabel: "Accuracy",
    description:
      "Automated invoice reading and data extraction that reduced manual data entry by 70% for a finance team — reclaiming 22 hours per week.",
    outcome: "Processing time cut from 15 min to 45 seconds per invoice",
  },
  {
    icon: Mail,
    title: "Customer Email Automation",
    tech: "RAG on n8n + Claude",
    stat: "60%",
    statLabel: "Faster Resolution",
    description:
      "A Retrieval-Augmented Generation system that automatically categorises, searches a knowledge base, and drafts responses to customer emails.",
    outcome: "Support team handles 3x more tickets with same headcount",
  },
  {
    icon: Users,
    title: "AI Lead Processing",
    tech: "n8n + Relevance AI",
    stat: "85%",
    statLabel: "Faster Response",
    description:
      "Automated lead scoring, enrichment, and CRM assignment that ensures every lead gets a response within minutes, not hours.",
    outcome: "Lead-to-meeting conversion rate increased by 40%",
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding bg-white" id="case-studies">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Proof, Not Promises</span>
          <h2 className="section-title">
            Real Results from{" "}
            <span className="gradient-text">Real Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every system we build is measured by business impact. Here are some
            of the outcomes we have delivered.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="card relative overflow-hidden group"
            >
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400" />

              {/* Tech badge */}
              <div className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full mb-5">
                <study.icon size={14} />
                {study.tech}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {study.description}
              </p>

              {/* Stat */}
              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-emerald-500">
                    {study.stat}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {study.statLabel}
                  </span>
                </div>
              </div>

              {/* Outcome */}
              <p className="text-sm font-medium text-gray-700 flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">→</span>
                {study.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
