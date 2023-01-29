import Center from "components/Center";
import Player from "components/Player";
import Sidebar from "components/Sidebar";
import { getSession } from "next-auth/react";

function Home() {
  return (
    <>
      <div>
        <main className="bg-black h-screen overflow-hiden ">
          <div className="flex">
            <Sidebar />
            {/* center */}
            <Center />
          </div>
        </main>
        <div className="sticky bottom-0">
          <Player/>
        </div>
      </div>
    </>
  );
}
export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
