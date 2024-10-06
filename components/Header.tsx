"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dmSans } from "../styles/font";

const Header = () => {
  const pathname = usePathname();
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // New state for tracking scroll direction
  const lastScrollY = useRef(0); // Reference to store last scroll position

  const handleNavigationClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleActivityDropdown = () => {
    setIsActivityOpen(!isActivityOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsActivityOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current || currentScrollY < 10); // Adjust visibility
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${dmSans.className} fixed top-0 w-full transition-transform duration-300 z-[9999] ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className="mx-auto hidden lg:flex max-w-[1200px] items-center justify-between p-4 rounded-full bg-white shadow-lg"
        style={{ transform: "translateY(40%)" }}
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => handleNavigationClick("/", e)}
          >
            <Image src="/logocps.png" alt="logo" width={130} height={50} />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center gap-8">
          <Link
            href="/"
            onClick={(e) => handleNavigationClick("/", e)}
            className={`font-medium ${
              pathname === "/" ? "text-red-600" : "text-gray-700 hover:text-red-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={(e) => handleNavigationClick("/about", e)}
            className={`font-medium ${
              pathname === "/about" ? "text-red-600" : "text-gray-700 hover:text-red-600"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            onClick={(e) => handleNavigationClick("/blog", e)}
            className={`font-medium ${
              pathname === "/blog" ? "text-red-600" : "text-gray-700 hover:text-red-600"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={(e) => handleNavigationClick("/contact", e)}
            className={`font-medium ${
              pathname === "/contact" ? "text-red-600" : "text-gray-700 hover:text-red-600"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center">
          <a
            href="https://lms.cpslaboratory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
          >
            e-Learning
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
