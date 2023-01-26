import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import React from "react";
import { playlistIdState, playlistState } from "atoms/playlistAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import spotifyApi from "lib/spotify";
import useSpotify from "hooks/useSpotify";
import Songs from "./Songs";
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];
function Center() {
  const [color, setcolors] = useState("null");
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [playlist, setplaylist] = useRecoilState(playlistState);
  const playlistid = useRecoilValue(playlistIdState);

  useEffect(() => {
    setcolors(shuffle(colors).pop());
  }, [playlistid]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getPlaylist(playlistid)
        .then((data) => setplaylist(data.body))
        .catch((err) => console.log(`Something went wrong: ${err}`));
    }
  }, [spotifyApi, playlistid]);

  console.warn("yess", playlist);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="rounded-full flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer p-1 pr-2 bg-red-300 ">
          <img className="rounded-full w-7 h-7" src={session?.user.image} />
          <p>{session?.user.name}</p>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to bg-black ${color} text-white padding-8 h-80 `}
      >
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
        />
        <div>
          <p>
            PLAYLIST
          </p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl">
            {playlist?.name}
          </h1>
        </div>
      </section>
      <div>
        <Songs/>
      </div>
    </div>
  );
}

export default Center;
