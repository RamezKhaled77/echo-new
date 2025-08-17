// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 bg-white z-50">
      <ul className="nav-links">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="logo">
        <h1>
          Echo <span>New</span>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
    </nav>
    // <nav className="sticky sm:top-2 lg:top-5 bg-white z-50">
    //   <div className="logo">
    //     <h1>
    //       Echo <span>New</span>
    //     </h1>
    //   </div>

    //   <ul className="nav-links">
    //     <li>
    //       <a href="#" className="active">
    //         Home
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#">About</a>
    //     </li>
    //     <li>
    //       <a href="#">Contact</a>
    //     </li>
    //     <li>
    //       <a href="#">Products</a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
