import React, { useEffect } from "react";
import LeftNav from "../components/LeftNav";
import VideoCard from "../components/VideoCard";
import { data } from "./data";


const Feed = () => {


  const staticData = data.data?.results

  console.log(staticData);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)]">

      <LeftNav />



      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) =>

              <VideoCard
              // key={index}
              // video={item?.video}
              />

            )
          }



        </div>

      </div>


    </div>
  );
};

export default Feed;


// {isOnline && (
//   <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">

//       {loading
//         ? [1, 2, 3]
//           .map((e, index) => {
//             return <ShimmerVideoCard key={index} />;
//           })
//         : staticData.map((item, index) => {

//           if (item.type !== "video") return false;
//           return
//           <VideoCard key={index} video={item?.video} />;

//         })}


//     </div>

//   </div>
// )}

