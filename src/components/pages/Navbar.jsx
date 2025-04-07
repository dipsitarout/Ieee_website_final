"use client";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useState } from "react";
import logo from "../../assets/ieee_logo.png"; // Ensure this path is correct

const menuItems = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Objective", path: "about2" },
  { label: "Events", path: "events" },
  { label: "Team", path: "team" },
  
  { label: "Testimonials", path: "testimonials" },
  { label: "Timeline", path: "timeline" },
  { label: "ContactUs", path: "contactus" },
];

function MenuItems({ setIsOpen }) {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (setIsOpen) setIsOpen(false);
    }
  };

  return (
    <nav className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
      {menuItems.map((item) => (
        <Label
          key={item.path}
          onClick={() => handleClick(item.path)}
          className="text-sm font-bold cursor-pointer transition-all duration-300 px-4 py-2 rounded-md text-white 
                     hover:bg-greenyellow transform hover:scale-110 hover:font-semibold
                     hover:shadow-lg hover:rotate-2 hover:-translate-y-1"
        >
          {item.label}
        </Label>
      ))}
    </nav>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md py-3">
      <div className="container flex items-center justify-between px-4 md:px-6">
        {/* Logo (Left Side) */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
          const top = document.getElementById("home");
          if (top) top.scrollIntoView({ behavior: "smooth" });
        }}>
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Menu (Right Side) */}
        <div className="hidden lg:flex">
          <MenuItems />
        </div>

        {/* Mobile Menu (Hamburger) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="w-4/5 max-w-xs bg-black text-white p-4"
          >
            <MenuItems setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
