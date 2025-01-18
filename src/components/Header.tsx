import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img
              src="/placeholder.svg"
              alt="Logo"
              className="h-8 w-8 transition-transform duration-300 hover:rotate-12"
            />
            <span className="hidden font-bold sm:inline-block">AI Portal</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center space-x-6 md:flex">
          <Link to="/docs" className="text-sm font-medium transition-colors hover:text-primary">
            Documentation
          </Link>
          <Link to="/models" className="text-sm font-medium transition-colors hover:text-primary">
            Models
          </Link>
          <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 w-full bg-background border-b md:hidden">
            <nav className="container flex flex-col space-y-4 py-4">
              <Link to="/docs" className="text-sm font-medium transition-colors hover:text-primary">
                Documentation
              </Link>
              <Link to="/models" className="text-sm font-medium transition-colors hover:text-primary">
                Models
              </Link>
              <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </Link>
            </nav>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="secondary" className="hidden md:inline-flex">
            Coming Soon
          </Button>
        </div>
      </div>
    </header>
  );
};