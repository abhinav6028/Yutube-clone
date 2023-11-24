import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (

    <Link to={`/video/${105}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            src='https://static-cse.canva.com/blob/1226807/1600w-wK95f3XNRaM.jpg'
            alt="thumbnails"
            className="h-full w-full object-fill "
          />

        </div>

        <div className="flex text-black dark:text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
                // src={video?.author?.avatar[0]?.url}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              Earth
            </span>

            <span className="text-[12px] font-semibold mt-2 text-black/[0.7] dark:text-white/[0.7] flex items-center">
              Trying Diwali Firecrackers in Minecraft...

            </span>

            <div className="flex text-[12px] font-semibold text-black/[0.7] dark:text-white/[0.7] truncate overflow-hidden">
              <span>10 views</span>
              <span className="flex text-[24px] text-black/[0.7] dark:text-white/[0.7] font-bold leading-none relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">2 months ago</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
