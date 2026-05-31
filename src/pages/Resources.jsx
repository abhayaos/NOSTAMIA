import { BookOpen, FileText, Video, Code, HelpCircle, Activity, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Comprehensive guides and reference for deploying and managing your infrastructure.",
    href: "#",
    color: "text-blue-400",
  },
  {
    icon: FileText,
    title: "Blog",
    desc: "Latest updates, tutorials, and insights from the NOSTAMIA engineering team.",
    href: "#",
    color: "text-green-400",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    desc: "Step-by-step walkthroughs covering hosting, cloud, servers, and more.",
    href: "#",
    color: "text-red-400",
  },
  {
    icon: Code,
    title: "API Reference",
    desc: "Build and automate with the NOSTAMIA API. Full endpoint documentation included.",
    href: "#",
    color: "text-purple-400",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    desc: "Answers to the most common questions about our platform and services.",
    href: "#",
    color: "text-amber-400",
  },
  {
    icon: Activity,
    title: "Status Page",
    desc: "Real-time uptime monitoring and incident history for all NOSTAMIA services.",
    href: "#",
    color: "text-cyan-400",
  },
];

const guides = [
  { title: "Getting Started with Web Hosting", readTime: "5 min" },
  { title: "How to Deploy a Node.js App on NOSTAMIA", readTime: "8 min" },
  { title: "Setting Up a VPS for Production", readTime: "12 min" },
  { title: "Configuring Custom Domains & SSL", readTime: "6 min" },
  { title: "Scaling Your Cloud Infrastructure", readTime: "10 min" },
];

export default function Resources() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 mb-6">
            <BookOpen size={16} className="text-white" />
            Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Everything You Need to Succeed
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Docs, guides, tutorials, and tools to help you get the most out of NOSTAMIA.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.href}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:bg-zinc-900 hover:border-zinc-700"
            >
              <div className="flex items-center justify-between">
                <r.icon className={r.color} size={24} />
                <ExternalLink size={16} className="text-zinc-600 opacity-0 transition group-hover:opacity-100" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{r.desc}</p>
            </a>
          ))}
        </div>

        {/* Popular Guides */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Popular Guides</h2>
              <p className="text-sm text-zinc-400 mt-1">Curated tutorials to get you up and running fast.</p>
            </div>
            <Link to="#" className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4">
            {guides.map((g) => (
              <a
                key={g.title}
                href="#"
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/50 px-6 py-4 transition hover:bg-zinc-900 hover:border-zinc-700"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-zinc-500 shrink-0" />
                  <span className="text-sm font-medium text-zinc-300">{g.title}</span>
                </div>
                <span className="text-xs text-zinc-600 shrink-0">{g.readTime}</span>
              </a>
            ))}
          </div>

          <Link to="#" className="mt-4 flex sm:hidden items-center justify-center gap-2 text-sm text-zinc-400 hover:text-white transition py-3">
            View All Guides <ArrowRight size={16} />
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Need Help?</h2>
          <p className="mt-3 text-zinc-400 max-w-lg mx-auto">
            Our support team is available 24/7 to help you with anything you need.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/coming-soon-auth/get-started" className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
              Contact Support
            </Link>
            <Link to="/pricing" className="rounded-xl border border-zinc-800 px-6 py-3 font-semibold text-white transition hover:bg-zinc-900">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
