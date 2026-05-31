import { Cloud as CloudIcon, Cpu, Server, HardDrive, Network, Lock, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Cpu, title: "Scalable Compute", desc: "Spin up instances in seconds. Scale vertically or horizontally on demand." },
  { icon: Server, title: "Dedicated Resources", desc: "No noisy neighbors. Guaranteed CPU, RAM, and dedicated vCores." },
  { icon: HardDrive, title: "NVMe Block Storage", desc: "Ultra-fast NVMe SSD storage with snapshots and auto-backup." },
  { icon: Network, title: "Global Network", desc: "Multi-region deployment with private networking and load balancing." },
  { icon: Lock, title: "Enterprise Security", desc: "Isolated VPC, firewalls, encryption at rest and in transit." },
  { icon: CloudIcon, title: "Managed Kubernetes", desc: "Deploy and orchestrate containers with managed K8s clusters." },
];

const plans = [
  { name: "Standard", price: "₹999", cpu: "2 vCPU", ram: "4 GB", storage: "80 GB NVMe", transfer: "2 TB" },
  { name: "Business", price: "₹2,499", cpu: "4 vCPU", ram: "16 GB", storage: "200 GB NVMe", transfer: "5 TB", popular: true },
  { name: "Enterprise", price: "₹4,999", cpu: "8 vCPU", ram: "32 GB", storage: "500 GB NVMe", transfer: "10 TB" },
];

export default function Cloud() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 mb-6">
            <CloudIcon size={16} className="text-blue-400" />
            Cloud Platform
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Cloud Infrastructure,<br />Simplified
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Deploy, manage, and scale your applications on our global cloud platform with predictable pricing.
          </p>
          <Link to="/coming-soon-auth/get-started" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:bg-zinc-900 hover:border-zinc-700">
              <f.icon className="text-blue-400" size={24} />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <h2 className="mt-24 text-center text-3xl font-bold text-white">Cloud Plans</h2>
        <p className="mt-2 text-center text-zinc-400">Pay only for what you use. No hidden fees.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-6 transition ${p.popular ? "border-blue-500/50 bg-zinc-950 scale-105" : "border-zinc-800 bg-zinc-950 hover:bg-zinc-900"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white flex items-center gap-1">
                  <CloudIcon size={14} /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-white">{p.price}<span className="text-sm text-zinc-500"> /mo</span></div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.cpu}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.ram}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.storage}</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300"><Check size={16} className="text-green-400" />{p.transfer} Transfer</li>
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
