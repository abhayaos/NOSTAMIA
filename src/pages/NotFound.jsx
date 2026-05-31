import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="max-w-2xl text-center">
        <span className="inline-block rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
          Error 404
        </span>

        <h1 className="mt-6 text-7xl font-bold tracking-tight text-white md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg text-zinc-400">
          The page you're looking for doesn't exist, has been moved,
          or is temporarily unavailable.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-16">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} NOSTAMIA. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}