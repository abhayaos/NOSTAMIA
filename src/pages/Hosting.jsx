import { Globe, HardDrive, Shield, Zap, Headphones, Database, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Zap, title: "Lightning Speed", desc: "NVMe SSD storage with LiteSpeed caching for blazing fast load times." },
  { icon: Shield, title: "Free SSL & DDoS", desc: "Auto SSL certificates and enterprise-grade DDoS protection included." },
  { icon: HardDrive, title: "99.9% Uptime", desc: "Guaranteed uptime with redundant infrastructure and failover systems." },
  { icon: Database, title: "Daily Backups", desc: "Automated daily backups with one-click restore." },
  { icon: Globe, title: "Global CDN", desc: "Built-in CDN with 200+ edge locations worldwide." },
  { icon: Headphones, title: "24/7 Support", desc: "Expert support team available around the clock." },
];

const plans = [
  { name: "Starter", price: "₹199", sites: "1 Website", storage: "10 GB SSD", bandwidth: "100 GB" },
  { name: "Business", price: "₹499", sites: "25 Websites", storage: "50 GB NVMe", bandwidth: "Unlimited", popular: true },
  { name: "Enterprise", price: "₹999", sites: "Unlimited", storage: "200 GB NVMe", bandwidth: "Unlimited" },
];

export default function Hosting() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 mb-6">
            <Zap size={16} className="text-white" />
            Web Hosting
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Fast, Secure Web Hosting
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Deploy your websites with NVMe speeds, free SSL, daily backups, and 99.9% uptime guarantee.
          </p>
          <Link to="/coming-soon-auth/get-started" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:bg-zinc-900 hover:border-zinc-700">
              <f.icon className="text-white" size={24} />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <h2 className="mt-24 text-center text-3xl font-bold text-white">Choose Your Plan</h2>
        <p className="mt-2 text-center text-zinc-400">Scale as you grow, upgrade anytime.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-6 transition ${p.popular ? "border-white bg-zinc-950 scale-105" : "border-zinc-800 bg-zinc-950 hover:bg-zinc-900"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black flex items-center gap-1">
                  <Zap size={14} /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-white">{p.price}<span className="text-sm text-zinc-500"> /mo</span></div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.sites}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.storage}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.bandwidth}</li>
              </ul>
              <Link to="/coming-soon-auth/get-started" className="mt-6 block rounded-xl border border-zinc-800 py-3 text-center font-semibold text-white transition hover:bg-zinc-900">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
