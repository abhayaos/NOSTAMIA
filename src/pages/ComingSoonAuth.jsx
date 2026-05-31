import { Link, useParams } from "react-router-dom";
import { Lock, UserPlus, Rocket, ArrowLeft, Sparkles } from "lucide-react";

const typeConfig = {
  login: {
    title: "Login",
    icon: Lock,
    desc: "Secure access to your NOSTAMIA dashboard is on its way.",
    color: "from-blue-500 to-cyan-500",
  },
  register: {
    title: "Register",
    icon: UserPlus,
    desc: "Join NOSTAMIA — your account creation experience is being crafted.",
    color: "from-purple-500 to-pink-500",
  },
  "get-started": {
    title: "Get Started",
    icon: Rocket,
    desc: "Your journey with NOSTAMIA begins soon. We're putting the final touches.",
    color: "from-amber-500 to-orange-500",
  },
};

export default function ComingSoonAuth() {
  const { type } = useParams();
  const cfg = typeConfig[type] || typeConfig.login;
  const Icon = cfg.icon;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${cfg.color.includes('blue') ? '#3b82f6' : cfg.color.includes('purple') ? '#a855f7' : '#f59e0b'}, transparent 70%)` }}
      />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${cfg.color.includes('cyan') ? '#06b6d4' : cfg.color.includes('pink') ? '#ec4899' : '#ea580c'}, transparent 70%)` }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-lg animate-[fadeUp_0.6s_ease-out]">
        <div className="group relative">
          {/* Animated border glow */}
          <div
            className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${cfg.color} opacity-50 blur-sm transition duration-500 group-hover:opacity-80`}
          />
          <div
            className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${cfg.color} opacity-30`}
          />

          <div className="relative rounded-3xl border border-zinc-800/80 bg-zinc-950/90 p-10 backdrop-blur-2xl">
            {/* Icon */}
            <div
              className={`mx-auto flex h-20 w-20 animate-[bounceIn_0.6s_ease-out] items-center justify-center rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-lg`}
            >
              <Icon className="h-10 w-10 text-white" />
            </div>

            {/* Title */}
            <h1 className="mt-8 text-center text-4xl font-bold tracking-tight text-white">
              {cfg.title}{" "}
              <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>

            <p className="mt-4 text-center leading-relaxed text-zinc-400">
              {cfg.desc}
            </p>

            {/* Animated status */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800/60 bg-black/50 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm font-medium text-zinc-300">
                    Development Status
                  </span>
                </div>
                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  In Progress
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-zinc-300 to-white" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700/50 bg-zinc-900/50 px-5 py-3 font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800/50 hover:text-white"
              >
                <ArrowLeft size={18} />
                Back Home
              </Link>

              <Link
                to="/pricing"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                <Sparkles size={18} />
                Explore Services
              </Link>
            </div>

            <p className="mt-8 text-center text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} NOSTAMIA
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.5; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
