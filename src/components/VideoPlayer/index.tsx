import { ArrowLeft, Play, Volume } from "lucide-react";

function VideoPlayer() {
  return (
    <div className="fixed bg-zinc-800 border-t font-mont border-zinc-700 shadow-lg w-full h-[100px] bottom-0 left-0 text-gray-200 p-5 px-10 flex justify-between items-center">
      <div className="flex gap-x-5 items-center">
        <div className="h-16 w-16 shrink-0 overflow-hidden">
          <img
            src={`/s-1.jpg`}
            className="h-full w-full rounded shadow object-cover"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-sm font-medium">Galliyan from Ek villian</h1>
          <p className="text-sm text-gray-500">Ankit Tiwari</p>
        </div>
      </div>
      <div className="flex">
        <Play className="h-5 w-5" />
        <ArrowLeft className="h-5 w-5" />
      </div>

      <div>
        <Volume className="h-5 w-5" />
      </div>
    </div>
  );
}

export default VideoPlayer;
