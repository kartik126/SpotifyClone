import Center from "components/Center";
import Sidebar from "components/Sidebar";

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
        <div>{/* player */}</div>
      </div>
    </>
  );
}
export default Home;
