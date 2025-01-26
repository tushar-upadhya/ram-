"use client";

import { Menu, MoveRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import logo from "../../../public/assets/png-01-01.png";
import { Button } from "../ui/button";
import ProductDropdown from "./ProductDropdown";

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Ref for dropdown delay
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handlers for dropdown visibility
  const toggleDropdown = (visible: boolean) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(
      () => setDropdownVisible(visible),
      visible ? 0 : 200
    );
  };

  return (
    <header className="bg-[#0F0D0E] py-8 px-4 md:px-6 relative">
      {/* Header Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <Link href={"/"}>
            <span className="text-white text-2xl font-bold">
              <Image src={logo} alt="logo" width={150} height={150} />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={() => toggleDropdown(false)}
            >
              <span>Products</span>
              {isDropdownVisible && <ProductDropdown />}
            </div>
            <Link href="/about" className="hover:opacity-80 transition-opacity">
              About Us
            </Link>
          </nav>
        </div>

        {/* Book Demo Button */}
        <button className="hidden md:inline-block text-[#231F20] bg-[#FC7428] hover:bg-[#FC7428]/90 px-4 py-2 rounded-lg font-semibold transition-colors">
          Book Link Demo
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {isMenuOpen ? (
            <X onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0F0D0E] h-screen text-white flex flex-col items-center space-y-6 p-4 overflow-y-auto">
          <ul className="space-y-6 w-full max-w-sm">
            <li>
              <div
                className="relative text-center"
                onClick={() => toggleDropdown(!isDropdownVisible)}
              >
                <span className="cursor-pointer">Products</span>
                {isDropdownVisible && <ProductDropdown isMobile={true} />}
              </div>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:opacity-80 transition-opacity text-center"
              >
                About Us
              </Link>
            </li>
            <li>
              <Button className="text-[#231F20] duration-200 font-semibold transition-all bg-[#FC7428] hover:bg-[#FC7428]/90 flex items-center justify-center mx-auto">
                Book a demo
                <MoveRight />
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
