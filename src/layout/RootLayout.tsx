import { Outlet } from "react-router-dom";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";

function RootLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-[100vh]">
      <aside className="hidden md:block md:col-span-2 bg-black">
        <Sidebar />
      </aside>
      <main className="col-span-8 bg-zinc-900 ">
        <Outlet />
      </main>
      <aside className="hidden md:block md:col-span-2 bg-black">
        <RightBar />
      </aside>

      {/* <VideoPlayer /> */}
    </div>
  );
}

export default RootLayout;
