import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon, PresentationIcon, MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navigateTo = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => navigateTo("/")}
          >
            <span className="text-xl font-bold text-primary">
              Python Libraries
            </span>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2",
              isActive("/") && "bg-accent text-accent-foreground"
            )}
            onClick={() => navigateTo("/")}
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2",
              isActive("/presentation") && "bg-accent text-accent-foreground"
            )}
            onClick={() => navigateTo("/presentation")}
          >
            <PresentationIcon className="h-4 w-4" />
            Presentation
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-border py-4 ">
          <nav className="flex flex-col gap-2 px-4">
            <Button
              variant="ghost"
              className={cn(
                "justify-start",
                isActive("/") && "bg-accent text-accent-foreground"
              )}
              onClick={() => navigateTo("/")}
            >
              <HomeIcon className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "justify-start",
                isActive("/presentation") && "bg-accent text-accent-foreground"
              )}
              onClick={() => navigateTo("/presentation")}
            >
              <PresentationIcon className="h-4 w-4 mr-2" />
              Presentation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
