"use client";
import { signOut, useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { data: session } = useSession()
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const [navColor, setNavColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY > 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeNavColor);




  return (
    <>
      <main className="text-white">
        {/* Fixed Nav */}
        <header
          className={
            navColor
              ? "mb-20 fixed top-0 left-0 right-0 px-8 md:px-12 py-4 bg-[#12323f] ease-in-out duration-200 z-50"
              : "fixed top-0 left-0 right-0 px-8 md:px-12 py-4 bg-[#12323f] md:bg-[#152023] z-50"
          }
        >
          {/* Navmenu */}
          <div className="w-[95%] mx-auto flex justify-between items-center">
            <a href="#home">
              {/* <h1 className="text-2xl md:text-3xl z-10">CARBON-OPS</h1> */}
              <Image
                src="/images/Carbonops.png"
                width={200}
                height={200}
                alt="CarbonOps"
              />
            </a>
            {/* Desktop Navmenu */}
            <nav className="hidden md:flex justify-center items-center gap-8">

              <Link
                href="/"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>
              <Link
                href="/aboutus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>
              <Link
                href="/contactus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                CONTACT US
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>

              {session ? <><button
                onClick={() => signOut('google')}
                className="text-lg hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                Logout
              </button>
              </> : <><Link
                href="/login"
                className="text-lg hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                Login
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>
                <Link
                  href="/signup"
                  className="text-lg bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out"
                >
                  Signup
                </Link></>}

            </nav>
            {/* Hamburger button */}
            <button
              className="md:hidden text-xl hover:text-[#00BD57] ease-out duration-150"
              onClick={handleNav}
            >
              {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Mobile Navmenu */}
            <nav
              className={
                !nav
                  ? "md:hidden fixed right-0 top-16 w-1/2 pt-8 h-full flex flex-col justify-start items-center gap-6 bg-[#12323f] duration-200 ease-in-out"
                  : "hidden"
              }
            >
              <Link
                href="/"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>
              <Link
                href="/aboutus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>
              <Link
                href="/contactus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                CONTACT US
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>
              <Link
                href="/login"
                className="text-lg hover:text-[#00BD57] ease-out duration-200 relative group"
              >
                Login
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00BD57] transition-all group-hover:w-full rounded-2xl"></span>
              </Link>
              <Link
                href="/signup"
                className="text-lg bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out"
              >
                Signup
              </Link>
            </nav>
          </div>
          {/* <img src={Logo} /> */}
        </header>
      </main>
    </>
  );
};

export default Navbar;
