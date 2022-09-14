import React from "react";
import HomeNavBarList from "./HomeNavBarList";
import { FiSearch } from "react-icons/fi";
import { TbCapture } from "react-icons/tb";
import GalleryGrid from "./GalleryGrid";

const Home = () => {
  return (
    <div>
      <HomeNavBarList />

      <div className="banner mb-10">
        <div className="max-w-[800px] mx-auto home">
          <h1 className="text-[45px] font-bold mb-5">Unsplash</h1>
          <p className="text-[18px] font-medium mb-7">
            The internet’s source of freely-usable images. <br /> Powered by
            creators everywhere.
          </p>
          <div className="flex items-center bg-white px-3 py-3 rounded-md text-black mb-4">
            <FiSearch className="text-[21px] text-gray-500 cursor-pointer" />
            <input
              className="outline-none w-full px-3"
              type="text"
              placeholder="Search free high resolution photos"
            />
            <TbCapture className="text-[24px] text-gray-500 cursor-pointer" />
          </div>
          <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
        </div>
      </div>

      <GalleryGrid />
    </div>
  );
};

export default Home;
