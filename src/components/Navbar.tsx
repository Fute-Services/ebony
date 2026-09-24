import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/", icon: <FaHome /> },
  { label: "Project Highlights", href: "/ebony_projecthighlights" },
  { label: "Location", href: "/ebony_location" },
  { label: "Ebony MasterPlan", href: "/ebony_masterplan" },
  { label: "Project Details", href: "/ebony_project_details" },
   { label: "Project Status", href: "/project_status" },
  { label: "Gallery", href: "/ebony_gallery" },
    // { label: "Quality", href: "/ebony_quality" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile & Tablet Hamburger Button */}
      <div className="md:hidden block fixed top-7 right-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white text-2xl p-2 bg-black/50 rounded-lg"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navbar */}
      <div
        className={`
    fixed top-[11%] md:top-[94%] lg:top-[91%] xl:top-[92%] left-1/2 -translate-x-1/2 
    bg-black/50 z-40 rounded-2xl py-2 px-8 border-2 w-[85%] md:w-auto lg:w-auto
    flex justify-center items-center
    transition-all duration-300
    ${mobileOpen ? "block" : "hidden"} md:flex
  `}
      >
        <nav className="flex  w-full">
          <ul className="flex flex-col md:flex-row gap-3 lg:gap-6 text-white 
          text-nowrap  w-full">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full lg:w-auto">
                <NavLink
                  to={item.href}
                  onClick={() => setMobileOpen(false)} // closes on click
                  className={({ isActive }) =>
                    `transition font-bold w-full text-left
                   lg:text-center ${item.icon ? "text-3xl" : "text-sm"
                    } ${isActive
                      ? "text-[#e6a524] underline underline-offset-4"
                      : "text-white hover:text-yellow-300 hover:underline underline-offset-4"
                    }`
                  }
                >
                  {item.icon ? item.icon : item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </>
  );
}
