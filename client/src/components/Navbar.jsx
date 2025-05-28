import React from "react";
import { Link } from "react-router";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link className=" text-xl">Online Store</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/cart"}>Item 1</Link>
          </li>

          <li>
            <Link to={"/shop"}>Item 3</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
