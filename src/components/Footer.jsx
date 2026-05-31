import { Link } from "react-router-dom";
import { Paperclip } from "lucide-react";

const sections = [
  {
    title: "Products",
    links: [
      { label: "Hosting", to: "/hosting" },
      { label: "Cloud", to: "/cloud" },
      { label: "Servers", to: "/servers" },
      { label: "Domains", to: "/domains" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", to: "/pricing" },
      { label: "Resources", to: "/resources" },
      { label: "Blog", to: "#" },
      { label: "Status", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-wider text-white">
              NOSTAMIA
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500 max-w-xs">
              a hosting platform from Nepal genz
            </p>
          </div>

          {/* Link Sections */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{s.title}</h4>
              <ul className="space-y-3">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-zinc-500 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-zinc-800/60 pt-8">
          <div className="relative inline-flex items-center gap-2 rounded-xl border border-zinc-700/50 bg-zinc-950 px-5 py-2.5">
            <Paperclip size={16} className="text-zinc-400 -rotate-45" />
            <span className="text-sm text-zinc-400">
              Built with <span className="text-red-400">❤️</span> by <span className="text-white">Abhaya Bikram Shahi</span> for{" "}
              <span className="font-semibold text-white">NOSTAMIA</span>
            </span>
          </div>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
