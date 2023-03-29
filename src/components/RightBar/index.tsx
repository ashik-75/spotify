import { User, UserPlus } from "lucide-react";

const Skeleton = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className=" p-4 bg-gray-700 rounded-full">
        <User className="w-6 h-6" />
      </div>

      <div className="space-y-2 flex-1 ">
        <p className="h-2  w-[50%] rounded-xl bg-gray-700 animate-pulse"></p>
        <p className="h-2 w-[50%] rounded-xl bg-gray-700 animate-pulse"></p>
        <p className="h-2 w-[50%] rounded-xl bg-gray-700 animate-pulse"></p>
      </div>
    </div>
  );
};

function RightBar() {
  return (
    <div className="text-gray-300 px-5 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-300">Friend Activity</span>
        <span>
          <UserPlus className="w-5 h-5" />
        </span>
      </div>

      <p className="text-slate-200 font-medium text-sm ">
        let friend and followers on spotify see what you are listening to
      </p>

      <div className="space-y-3">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <p className="text-slate-200 font-medium text-sm ">
        Go to Settings {">"} Social and enable 'Share my listening activity on
        Spotify'. You can turn this off at any time
      </p>

      <div className="flex justify-center items-center">
        <button className="uppercase px-6 py-3 hover:scale-105 text-gray-800 text-sm bg-white rounded-full font-bold tracking-widest">
          Settings
        </button>
      </div>
    </div>
  );
}

export default RightBar;
