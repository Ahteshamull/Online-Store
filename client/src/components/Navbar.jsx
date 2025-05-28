import React from "react";
import { Link } from "react-router";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link className="hover:text-blue-500 text-teal-500 font-bold text-2xl">
          Online{" "}
          <span className="hover:text-teal-500 text-blue-500 font-bold text-2xl">
            Store
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center justify-between gap-10 px-1">
          <li>
            <Link className="hover:text-blue-500 font-semibold  " to={"/cart"}>
              Cart
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-500 font-semibold" to={"/shop"}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
