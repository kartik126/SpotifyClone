import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <>
      <div className="text-gray-500 p-5 text-sm border-r border-gray-500 space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          Home
        </button>

        <button className="flex items-center hover:text-white  space-x-2">
          <MagnifyingGlassIcon className="h-5 w-5" />
          Search
        </button>

        <button className="flex items-center  hover:text-white space-x-2 ">
          <BuildingLibraryIcon className="h-5 w-5" />
          Your Library
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center  space-x-2 hover:text-white">
          <PlusIcon className="h-5 w-5 " />
          Create Playlist
        </button>
        <button className="flex items-center  hover:text-white space-x-2 ">
          <HeartIcon className="h-5 w-5" />
          Liked Songs
        </button>
        <button className="flex items-center hover:text-white  space-x-2">
          <RssIcon className="h-5 w-5" />
          Your Episodes
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
        {/* play list */}
        <p className="cursor-pointer hover:text-white">play list</p>
        <p className="cursor-pointer hover:text-white">play list</p>
        <p className="cursor-pointer hover:text-white">play list</p>
        <p className="cursor-pointer hover:text-white">play list</p>
        <p className="cursor-pointer hover:text-white">play list</p>
        <p className="cursor-pointer hover:text-white">play list</p>
        <p className="cursor-pointer hover:text-white">play list</p>
        <p className="cursor-pointer hover:text-white">play list</p>
      </div>
    </>
  );
}

export default Sidebar;
