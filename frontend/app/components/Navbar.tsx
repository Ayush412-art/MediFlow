"use client";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full hero top-0 px-5 lg:px-8 xl:px-[8%] py-2 lg:py-2 flex items-center justify-between z-50 bg-transparent">

      <Link href="#home" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="product-logo"
          height={100}
          width={100}
          priority
        />
      </Link>

      <ul className="hidden md:flex items-center space-x-5 rounded-full py-3 px-10 bg-white/95 shadow-sm">
        <li><a className="nav-link" href="#home">Home</a></li>
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#work">Features</a></li>
        <li><a className="nav-link" href="#projects">Feedback</a></li>
        <li><a className="nav-link" href="#contact">Demo</a></li>
      </ul>

      {/* RIGHT: Login / Signup */}
      <div className="flex items-center gap-3">
        <button className="btn btn-ghost btn-sm">Login</button>
        <button className="btn btn-primary btn-sm">Sign Up</button>
      </div>

    </nav>
  );
}

export default Navbar;
