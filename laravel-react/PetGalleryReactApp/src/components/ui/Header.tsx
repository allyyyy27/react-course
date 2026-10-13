import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  // State to manage mobile menu open/close toggle
  const [isOpen, setIsOpen] = useState(false);

  // Hook to get the current URL path to highlight the active tab
  const location = useLocation();

  // Helper function to apply active styles conditionally
  const isActive = (path: string) => location.pathname === path;

  const [searchQuery, setSearchQuery] = useState("");

  // Nav Links styling utility helper
  const linkStyles = (path: string) => `
    relative transition-colors duration-300 font-medium py-2 px-1
    ${isActive(path) ? "text-blue-400" : "text-gray-200 hover:text-white"}
    after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 
    after:bg-blue-400 after:transition-transform after:duration-300
    ${isActive(path) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
  `;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for pets:", searchQuery);
    // You can forward this query to your route like navigate(`/gallery?search=${searchQuery}`) later
  };

  return (
    <header className="bg-header-bg sticky top-0 z-50 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 1. App Logo / Branding Link */}
          <div className="flex-shrink-0"></div>

          {/* 2. Desktop Navigation Layout (Visible on medium viewports and above) */}
          <div className="hidden md:flex items-center flex-1 justify-end space-x-8">
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-full max-w-sm"
            >
              <input
                type="text"
                placeholder="Search pets, breeds, or stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-black placeholder-beige text-sm font-poppins pl-10 pr-4 py-2 rounded-full border border-white focus:outline-none focus:border-beige focus:ring-1 focus:ring-beige transition-all duration-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-beige"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>

            <nav className="flex items-center space-x-8 font-poppins-reg text-nav-size text-nav-color">
              <Link to="/dashboard" className={linkStyles("/gallery")}>
                My Gallery
              </Link>
              <Link to="/gallery" className={linkStyles("/faqs")}>
                FAQ's
              </Link>

              {/* Logout Shortcut button on desktop */}
              <Link
                to="/"
                className="ml-4 bg-slate-800 hover:bg-red-600/20 hover:text-red-400 border border-slate-700 hover:border-red-500/30 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
              >
                Log Out
              </Link>
            </nav>
          </div>

          {/* 3. Mobile Hamburger Button (Visible on mobile/small viewports only) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {/* Animated Hamburger Icon paths changes conditionally */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Dropdown Navigation Panel (Rendered dynamically when toggled) */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800 absolute w-full left-0 transition-all duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base transition-colors ${isActive("/dashboard") ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}
            >
              Dashboard
            </Link>

            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base transition-colors ${isActive("/gallery") ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}
            >
              Gallery
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base transition-colors ${isActive("/about") ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}
            >
              About
            </Link>

            <div className="pt-4 mt-2 border-t border-slate-800">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full bg-slate-800 hover:bg-red-600 text-white font-medium py-2 rounded-lg text-sm transition-colors"
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
