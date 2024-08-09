import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-10 max-w-5xl w-full fixed top-0 left-0 py-4 px-4  font-mono text-sm">
      <nav className="w-full flex items-center justify-between">
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
        <Link href="/about-us" passHref>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
