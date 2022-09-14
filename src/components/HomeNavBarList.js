import React from "react";
import { Link } from "react-router-dom";

const HomeNavBarList = () => {
  return (
    <div className="px-[20px] sticky left-0 top-[64px] bg-white z-40">
      <div className="flex items-center text-gray-500 overflow-hidden text-[14px] font-[500]">
        <div>
          <Link
            className="flex py-5 border-b-2 border-b-gray-800"
            to="/edition"
          >
            Edition
          </Link>
        </div>
        <div style={{ width: "20px" }}></div>
        <div className="bg-[#d1d1d1] w-[1px] h-8 mr-5"></div>

        <div className="list_menu">
          <ul className="flex items-center">
            <li>
              <Link to="/edition">Current Events</Link>
            </li>
            <li>
              <Link to="/edition">Wallpapers</Link>
            </li>
            <li>
              <Link to="/edition">3D Renders</Link>
            </li>
            <li>
              <Link to="/edition">Textures & Patterns</Link>
            </li>
            <li>
              <Link to="/edition">Experimental</Link>
            </li>
            <li>
              <Link to="/edition">Architecture</Link>
            </li>
            <li>
              <Link to="/edition">Nature</Link>
            </li>
            <li>
              <Link to="/edition">Business & Work</Link>
            </li>
            <li>
              <Link to="/edition">Fashion</Link>
            </li>
            <li>
              <Link to="/edition">Film</Link>
            </li>
            <li>
              <Link to="/edition">Food & Drink</Link>
            </li>
            <li>
              <Link to="/edition">Nature</Link>
            </li>
            <li>
              <Link to="/edition">Business & Work</Link>
            </li>
            <li>
              <Link to="/edition">Fashion</Link>
            </li>
            <li>
              <Link to="/edition">Film</Link>
            </li>
            <li>
              <Link to="/edition">Food & Drink</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBarList;
