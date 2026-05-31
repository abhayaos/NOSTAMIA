import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Server } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-6 pt-12 pb-28 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
          <Zap size={16} className="text-white" />
          Next-Gen Cloud Hosting Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Deploy Websites, Apps & Servers
          <br />
          <span className="text-zinc-400">
            Faster than ever before.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Nostamia gives you blazing fast hosting, VPS, cloud servers,
          and domains — all in one powerful platform built for developers
          and businesses.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/get-started"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            Get Started <ArrowRight size={18} />
          </Link>

          <Link
            to="/pricing"
            className="rounded-xl border border-zinc-800 px-6 py-3 font-semibold text-white transition hover:bg-zinc-900"
          >
            View Pricing
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left hover:bg-zinc-900 transition">
            <Server className="text-white" />
            <h3 className="mt-3 text-white font-semibold">
              High Performance Servers
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              NVMe storage, global CDN, ultra-fast deployment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left hover:bg-zinc-900 transition">
            <Zap className="text-white" />
            <h3 className="mt-3 text-white font-semibold">
              Instant Deployment
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Deploy apps, APIs, and websites in seconds.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left hover:bg-zinc-900 transition">
            <Shield className="text-white" />
            <h3 className="mt-3 text-white font-semibold">
              Secure Infrastructure
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              DDoS protection, SSL, and enterprise-grade security.
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <p className="mt-14 text-sm text-zinc-600">
          Trusted by developers, startups & businesses worldwide.
        </p>

      </div>
    </section>
  );
}