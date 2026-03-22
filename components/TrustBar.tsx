import { Award, CheckCircle, Code2, Shield } from "lucide-react";

const badges = [
  {
    icon: CheckCircle,
    label: "n8n Verified Creator",
    color: "text-emerald-600",
  },
  {
    icon: Award,
    label: "Claude Certified Architect",
    color: "text-primary-600",
  },
  {
    icon: Code2,
    label: "10+ Years in Software",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    label: "Production-Grade Systems",
    color: "text-amber-600",
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 text-gray-700"
            >
              <badge.icon size={20} className={badge.color} />
              <span className="text-sm font-semibold">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
