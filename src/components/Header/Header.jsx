import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/all-images/logo.ico";

const navigation = [
  { path: "/home" },
  { path: "/job offers" },
  { path: "/training" },
  { path: "/contact" },
];

export default function Header() {
  return (
    <header className="inset-x-0 top-0 z-50 bg-gray-800 ">
      <nav
        className="flex items-center justify-between text-white lg:px-8"
        aria-label="Global"
      >
        <Link
          to="/home"
          className="flex items-center font-sans lg:flex-1 text-sky-500"
        >
          <img src={logo} alt="" />
          <img src="/dev.ico" alt="" />
          <div
            className="pt-3 text-xl capitalize"
            style={{ color: "#11F6FD", fontFamily: "Dancing Script, cursive" }}
          >
            recruit
          </div>
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((path, index) => (
            <Link
              to={path.path}
              key={index}
              className="flex items-center capitalize hover:text-teal-500 "
            >
              {path.path.slice(1)}
            </Link>
          ))}
        </div>
        <div className="hidden text-teal-300 lg:flex lg:flex-1 lg:justify-end ">
          <Link
            to="/Sign In"
            className="font-semibold leading-6 text-l hover:text-white "
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
