import { Link } from "react-router-dom";
import { Globe, Clock3, ArrowLeft, Search } from "lucide-react";

export default function DomainComingSoon() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
          <Globe className="text-white" size={34} />
        </div>

        {/* Badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
          <Clock3 size={16} />
          Domain System Coming Soon
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Domain Services Are Under Construction
        </h1>

        {/* Description */}
        <p className="mt-4 text-zinc-400 text-lg">
          We’re building a powerful domain platform where you can search,
          register, transfer, and manage domains instantly — all inside Nostamia.
        </p>

        {/* Feature Preview Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-left">
            <Search className="text-white" />
            <h3 className="mt-3 text-white font-semibold">
              Domain Search
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Find your perfect domain instantly
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-left">
            <Globe className="text-white" />
            <h3 className="mt-3 text-white font-semibold">
              Register Domains
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Buy domains at best pricing
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-left">
            <Clock3 className="text-white" />
            <h3 className="mt-3 text-white font-semibold">
              Fast Setup
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Instant DNS & configuration
            </p>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-zinc-200 transition"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <Link
            to="/pricing"
            className="rounded-xl border border-zinc-800 px-6 py-3 font-semibold text-white hover:bg-zinc-900 transition"
          >
            View Pricing
          </Link>

        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-zinc-600">
          © {new Date().getFullYear()} Nostamia — Domains launching soon
        </p>

      </div>
    </section>
  );
}