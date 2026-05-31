import { Check, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₹199",
    desc: "Perfect for small websites & portfolios",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Free SSL",
      "Basic Support",
    ],
    notIncluded: ["Daily Backup", "Priority Support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹499",
    desc: "Best for growing businesses",
    features: [
      "Unlimited Websites",
      "50 GB NVMe Storage",
      "Free Domain (1 Year)",
      "Free SSL",
      "Daily Backup",
      "Priority Support",
    ],
    notIncluded: [],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹999",
    desc: "For large scale applications & companies",
    features: [
      "Unlimited Everything",
      "200 GB NVMe Storage",
      "Dedicated Resources",
      "Free Domain + CDN",
      "24/7 Priority Support",
      "Advanced Security",
    ],
    notIncluded: [],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative min-h-screen bg-black px-6 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Simple, Transparent Pricing
        </h1>

        <p className="mt-4 text-zinc-400 text-lg">
          No hidden charges. Upgrade anytime. Cancel anytime.
        </p>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 text-left transition ${
                plan.popular
                  ? "border-white bg-zinc-950 scale-105"
                  : "border-zinc-800 bg-zinc-950 hover:bg-zinc-900"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black flex items-center gap-1">
                  <Zap size={14} />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h2 className="text-xl font-bold text-white">
                {plan.name}
              </h2>

              <p className="mt-1 text-sm text-zinc-400">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-4 text-3xl font-bold text-white">
                {plan.price}
                <span className="text-sm text-zinc-500"> / month</span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Check size={16} className="text-green-400" />
                    {f}
                  </li>
                ))}

                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-zinc-600 text-sm">
                    <X size={16} className="text-red-400" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                to="/coming-soon-auth"
                className={`mt-8 block text-center rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-zinc-800 text-white hover:bg-zinc-900"
                }`}
              >
                Get Started
              </Link>

            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-14 text-sm text-zinc-600">
          Trusted by developers & startups worldwide
        </p>
      </div>
    </section>
  );
}