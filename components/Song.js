import { playlistState } from "atoms/playlistAtom";
import { currentTrackIdState, isPlayingState } from "atoms/songAtom";
import useSpotify from "hooks/useSpotify";
import { millisToMinutesAndSeconds } from "lib/time";
import React from "react";
import { useRecoilState } from "recoil";
function Song({ order, track }) {
  const spotifyApi = useSpotify();
  const [currentTrackId, setcurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setisPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setcurrentTrackId(track.track.id);
    setisPlaying(true);
    spotifyApi.play({
      uris:[track.track.uri],

    })
  };
  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer">
      <div className="flex flex-row items-center space-x-4" onClick={()=>playSong()}>
        <p>{order + 1}</p>
        <img className="m-3 w-10 h-10" src={track?.track.album.images[0].url} />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">{track.track.name}</p>
          <p className="w-40 ">{track?.track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-aut0 md:ml-0">
        <p className="hidden md:inline w-40 ">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
