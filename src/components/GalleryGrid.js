import React, { useState } from "react";
import { gallery_img_data } from "./datas";
import { FcLike } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const GalleryGrid = () => {
  const [overlay, setOverlay] = useState(false);
  const [singleData, setSingleData] = useState();

  const handlePopupImage = (e) => {
    setOverlay(true);
    setSingleData(e);
  };
  return (
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="gallery_grid">
        {gallery_img_data.map((data) => (
          <div
            className={`${data.cName} cursor-zoom-in relative single_item`}
            key={data.id}
            onClick={() => handlePopupImage(data)}
          >
            <img src={data.img_url} alt="" />
            <div className="absolute right-3 top-3 flex gap-2">
              <div className="top_right_icon">
                <FcLike />
              </div>
              <div className="top_right_icon">
                <AiOutlinePlus />
              </div>
            </div>
            <div className="bottom_right_icon">
              <BiDownload />
            </div>
          </div>
        ))}
      </div>

      {overlay && (
        <div className="fixed w-full h-full bg-[#00000096] top-0 left-0 flex items-center justify-center z-[999]">
          <IoMdClose
            onClick={() => setOverlay(false)}
            className="fixed top-5 left-5 text-[30px] cursor-pointer text-white"
          />
          <div className="w-[80%] h-[80%] bg-white rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={singleData.img_url}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
