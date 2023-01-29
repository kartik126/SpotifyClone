import React from "react";
import { useState, useEffect } from "react";
import useSpotify from "hooks/useSpotify";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { signOut, useSession } from "next-auth/react";
import spotifyApi from "lib/spotify";
import { playlistIdState } from "atoms/playlistAtom";
function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistid, setplaylistid] = useRecoilState(playlistIdState);
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);
  console.log('yessss',playlistid);
  return (
    <>
      <div className="hidden md:inline-flex text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] pb-36">
        <div className="space-y-4 ">
        <button
          className="flex items-center justify-between  hover:text-white"
        
        >
          <HomeIcon className="h-5 w-5 mx-1" />
          Home
        </button>

        <button className="flex items-center hover:text-white  space-x-2">
          <MagnifyingGlassIcon className="h-5 w-5 mx-1" />
          Search
        </button>

        <button className="flex items-center  hover:text-white space-x-2 ">
          <BuildingLibraryIcon className="h-5 w-5 mx-1" />
          Your Library
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center  space-x-2 hover:text-white">
          <PlusIcon className="h-5 w-5 mx-1" />
          Create Playlist
        </button>
        <button className="flex items-center  hover:text-white space-x-2 ">
          <HeartIcon className="h-5 w-5 mx-1" />
          Liked Songs
        </button>
        <button className="flex items-center hover:text-white  space-x-2">
          <RssIcon className="h-5 w-5 mx-1" />
          Your Episodes
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
        {/* play list */}
        {playlists?.map((playlists) => {
          return (
            <p
              key={playlists.id}
              className="cursor-pointer hover:text-white"
              onClick={() => setplaylistid(playlists.id)}
            >
              {playlists.name}
            </p>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
