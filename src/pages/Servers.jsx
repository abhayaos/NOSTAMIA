import { Server as ServerIcon, Cpu, HardDrive, Shield, Wifi, Sliders, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Cpu, title: "Bare Metal Power", desc: "Full dedicated server with no virtualization overhead. Raw performance." },
  { icon: HardDrive, title: "NVMe RAID Storage", desc: "Enterprise NVMe SSDs in RAID 10 for maximum speed and redundancy." },
  { icon: Shield, title: "DDoS Protection", desc: "Multi-layer DDoS mitigation up to 1 Tbps included on all plans." },
  { icon: Wifi, title: "1 Gbps Uplink", desc: "Premium bandwidth with 1 Gbps dedicated port, upgradeable to 10 Gbps." },
  { icon: Sliders, title: "Full Root Access", desc: "Complete control with root/administrator access and custom ISOs." },
  { icon: ServerIcon, title: "Global Locations", desc: "Deploy in 15+ data centers across North America, Europe, and Asia." },
];

const plans = [
  { name: "VPS-S", price: "₹599", cpu: "1 vCPU", ram: "2 GB", storage: "50 GB NVMe", bandwidth: "2 TB" },
  { name: "VPS-M", price: "₹1,199", cpu: "2 vCPU", ram: "4 GB", storage: "100 GB NVMe", bandwidth: "4 TB", popular: true },
  { name: "VPS-L", price: "₹2,399", cpu: "4 vCPU", ram: "8 GB", storage: "200 GB NVMe", bandwidth: "8 TB" },
];

export default function Servers() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.06),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 mb-6">
            <ServerIcon size={16} className="text-purple-400" />
            Virtual Private Servers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Powerful VPS & Dedicated Servers
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            High-performance virtual and dedicated servers with NVMe storage, full root access, and 99.9% uptime SLA.
          </p>
          <Link to="/coming-soon-auth/get-started" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:bg-zinc-900 hover:border-zinc-700">
              <f.icon className="text-purple-400" size={24} />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <h2 className="mt-24 text-center text-3xl font-bold text-white">VPS Plans</h2>
        <p className="mt-2 text-center text-zinc-400">Scale your infrastructure as you grow.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-6 transition ${p.popular ? "border-purple-500/50 bg-zinc-950 scale-105" : "border-zinc-800 bg-zinc-950 hover:bg-zinc-900"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white flex items-center gap-1">
                  <ServerIcon size={14} /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-white">{p.price}<span className="text-sm text-zinc-500"> /mo</span></div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.cpu}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.ram}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.storage}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.bandwidth} Bandwidth</li>
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
