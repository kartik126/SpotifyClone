import React from "react";
import { getProviders, signIn } from "next-auth/react";
import spotifyImg from "../../public/pngegg.png";
import Image from "next/image";
function login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min justify-center min-h-screen w-full">
      <Image className="w-52 mb-5" src={spotifyImg} alt="" />
      {Object.values(providers).map((val) => (
        <div key={val.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(val.id, { callbackUrl: "/" })}
          >
            Login with {val.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
