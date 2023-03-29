import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import SongList from "../components/SongList";
import { getData } from "../services/shazam";

function Homepage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["top-chart"],
    queryFn: () => getData("charts/world"),
  });

  console.log({ data, isLoading, isError });
  return (
    <div className="bg-zinc-900 h-[100vh] overflow-y-scroll scrollbar-hide">
      <div>
        {/* sticky nav */}
        <div className=" top-0 left-0 bg-sky-800/50 sticky h-[80px] w-full px-5">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-5">
              <button className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-800 text-white">
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-800 text-white">
                <ChevronRight className="h-7 w-7" />
              </button>

              <button className="h-12 w-12 rounded-full bg-green-500 text-white flex justify-center items-center">
                <Play className="w-7 h-7" />
              </button>

              <div className="font-bold text-white text-3xl">World Top</div>
            </div>

            <button className="px-5 py-3 rounded-full border font-bold text-white tracking-widest">
              Upgrade
            </button>
          </div>
        </div>
        {/* banner details */}
        <div className="h-[400px] w-full bg-gradient-to-b from-purple-500 to-zinc-900 flex gap-10 items-end p-10">
          <div className="h-[250px] w-[300px] overflow-hidden">
            <img
              src="/s-3.jpg"
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="space-y-3">
            <p className="font-medium text-white">Public Playlist</p>
            <h1 className="text-7xl font-extrabold text-white">World Chart</h1>
            <p className="text-white font-medium">no. 28 songs, 1hr 49 min</p>
          </div>
        </div>
      </div>
      <SongList songs={data} />
    </div>
  );
}

export default Homepage;
