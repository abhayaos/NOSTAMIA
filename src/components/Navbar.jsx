import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    title: "Hosting",
    path: "/hosting",
    dropdown: [
      {
        title: "Shared Hosting",
        path: "/hosting/shared",
        description: "Fast and reliable web hosting",
      },
      {
        title: "WordPress Hosting",
        path: "/hosting/wordpress",
        description: "Optimized for WordPress sites",
      },
      {
        title: "Reseller Hosting",
        path: "/hosting/reseller",
        description: "Start your own hosting business",
      },
    ],
  },
  {
    title: "Cloud",
    path: "/cloud",
    dropdown: [
      {
        title: "Cloud Compute",
        path: "/cloud/compute",
        description: "Scalable cloud servers",
      },
      {
        title: "Object Storage",
        path: "/cloud/storage",
        description: "Secure file storage",
      },
      {
        title: "Managed Databases",
        path: "/cloud/databases",
        description: "Fully managed database services",
      },
    ],
  },
  {
    title: "Servers",
    path: "/servers",
    dropdown: [
      {
        title: "VPS Hosting",
        path: "/servers/vps",
        description: "Powerful virtual servers",
      },
      {
        title: "Dedicated Servers",
        path: "/servers/dedicated",
        description: "Maximum performance",
      },
      {
        title: "GPU Servers",
        path: "/servers/gpu",
        description: "AI and ML workloads",
      },
    ],
  },
  {
    title: "Domains",
    path: "/domains",
    dropdown: [
      {
        title: "Register Domain",
        path: "/domains/register",
        description: "Find your perfect domain",
      },
      {
        title: "Transfer Domain",
        path: "/domains/transfer",
        description: "Move domains to Nostamia",
      },
      {
        title: "WHOIS Lookup",
        path: "/domains/whois",
        description: "Check domain ownership",
      },
    ],
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Resources",
    path: "/resources",
    dropdown: [
      {
        title: "Documentation",
        path: "/docs",
        description: "Developer documentation",
      },
      {
        title: "Blog",
        path: "/blog",
        description: "Latest updates and tutorials",
      },
      {
        title: "Support Center",
        path: "/support",
        description: "24/7 customer support",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-wider text-white">
            NOSTAMIA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
              >
                {item.title}
                {item.dropdown && <ChevronDown size={16} />}
              </Link>

              {item.dropdown && activeDropdown === item.title && (
                <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-zinc-800 bg-zinc-950 p-3 shadow-2xl">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block rounded-xl p-3 transition hover:bg-zinc-900"
                    >
                      <h4 className="font-medium text-white">
                        {subItem.title}
                      </h4>
                      <p className="mt-1 text-sm text-zinc-400">
                        {subItem.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/coming-soon-auth"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/coming-soon-auth"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Register
          </Link>

          <Link
            to="/coming-soon-auth"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
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
          <div className="space-y-2 p-6">
            {navItems.map((item) => (
              <div key={item.title}>
                <Link
                  to={item.path}
                  className="block py-2 text-zinc-300"
                >
                  {item.title}
                </Link>

                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2 border-l border-zinc-800 pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block text-sm text-zinc-500"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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