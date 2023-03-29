import { Outlet } from "react-router-dom";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";

function RootLayout() {
  return (
    <div className="grid grid-cols-12 h-[100vh]">
      <aside className="hidden md:block col-span-2 bg-black">
        <Sidebar />
      </aside>
      <main className="col-span-8 ">
        <Outlet />
      </main>
      <aside className="col-span-2 bg-black">
        <RightBar />
      </aside>

      {/* <VideoPlayer /> */}
    </div>
  );
}

export default RootLayout;
