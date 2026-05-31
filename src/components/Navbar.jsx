import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Hosting", path: "/hosting" },
  { title: "Cloud", path: "/cloud" },
  { title: "Servers", path: "/servers" },
  { title: "Domains", path: "/domains" },
  { title: "Pricing", path: "/pricing" },
  { title: "Resources", path: "/resources" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider text-white">
          NOSTAMIA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/coming-soon-auth"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/coming-soon-auth"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Register
          </Link>

          <Link
            to="/coming-soon-auth"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-white lg:hidden"
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-zinc-800 bg-black lg:hidden">
          <div className="flex flex-col gap-4 p-6">
            
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-zinc-300 hover:text-white"
              >
                {item.title}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3 border-t border-zinc-800 pt-6">
              <Link to="/coming-soon-auth" className="text-zinc-300">
                Login
              </Link>

              <Link to="/coming-soon-auth" className="text-zinc-300">
                Register
              </Link>

              <Link
                to="/coming-soon-auth"
                className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-black"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}