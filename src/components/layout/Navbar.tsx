import Link from "next/link";
import { type ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Stock Bro</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink href="/">Dashboard</NavLink>
            <NavLink href="/chat">Chat</NavLink>
            <NavLink href="/discover">Discover</NavLink>
            <NavLink href="/settings">Settings</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;