import { Heart, Home, Library, Plus, Search } from "lucide-react";

const Bar = ({ Icon, title }: any) => {
  return (
    <button className="flex gap-x-4 items-center hover:text-white">
      <Icon className="h-7 w-7" />
      <span className="font-medium text-sm">{title}</span>
    </button>
  );
};

const albums = [
  {
    id: 1,
    title: "arabic",
  },
  {
    id: 2,
    title: "hindi",
  },
  {
    id: 3,
    title: "english",
  },
  {
    id: 4,
    title: "band music banla",
  },
  {
    id: 5,
    title: "classic music",
  },
  {
    id: 6,
    title: "english pop",
  },
  {
    id: 7,
    title: "south indian",
  },
  {
    id: 8,
    title: "shakira",
  },
  {
    id: 9,
    title: "k pop",
  },
  {
    id: 10,
    title: "bangla pop",
  },
];

function Sidebar() {
  return (
    <div className="text-gray-300 space-y-5 h-[100vh]  px-5 py-10">
      <div className="space-y-3">
        <Bar Icon={Home} title="Home" />
        <Bar Icon={Search} title="Search" />
        <Bar Icon={Library} title="Your Library" />
      </div>
      <div className="pt-5 space-y-3 border-b border-gray-800 pb-5">
        <Bar Icon={Plus} title="Create Playlist" />
        <Bar Icon={Heart} title="Liked Songs" />
      </div>
      {/* albums */}
      <div className="space-y-3">
        {albums.map((album) => (
          <div
            key={album.id}
            className="capitalize hover:text-white cursor-pointer text-sm font-medium"
          >
            {album.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
