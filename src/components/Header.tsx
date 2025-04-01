
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/signin" className="hidden md:inline-block text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Sign In
          </Link>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
