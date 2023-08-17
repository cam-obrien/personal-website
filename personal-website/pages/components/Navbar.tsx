// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {


  return (
        <div className="navbar text-primary">
        <SwitchTheme/>

        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl ">Cameron O'Brien</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            </ul>
        </div>
        </div>
  );
};
export default Navbar;