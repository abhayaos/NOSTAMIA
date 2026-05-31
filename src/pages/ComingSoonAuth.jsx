import { Link } from "react-router-dom";
import { Clock3, ArrowLeft } from "lucide-react";

export default function ComingSoonAuth({
  title = "Login",
}) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="relative z-10 w-full max-w-xl">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-10 backdrop-blur-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
            <Clock3 className="h-10 w-10 text-white" />
          </div>

          <h1 className="mt-8 text-center text-4xl font-bold text-white">
            {title} Coming Soon
          </h1>

          <p className="mt-4 text-center text-zinc-400">
            We're currently building our authentication system.
            Login and registration will be available soon.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-4">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">
                Development Status
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                In Progress
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[75%] rounded-full bg-white" />
            </div>

            <p className="mt-3 text-sm text-zinc-500">
              Authentication system is currently under development.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              <ArrowLeft size={18} />
              Back Home
            </Link>

            <Link
              to="/pricing"
              className="flex flex-1 items-center justify-center rounded-xl border border-zinc-800 px-5 py-3 font-medium text-white transition hover:bg-zinc-900"
            >
              Explore Services
            </Link>
          </div>

          <p className="mt-8 text-center text-sm text-zinc-600">
            © {new Date().getFullYear()} Nostamia
          </p>
        </div>
      </div>
    </section>
  );
}