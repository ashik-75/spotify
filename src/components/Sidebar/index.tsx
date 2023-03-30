import { Heart, Home, Library, Plus, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Bar = ({ Icon, title, to = "/" }: any) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="flex gap-x-4 items-center hover:text-white"
    >
      <Icon className="h-7 w-7" />
      <span className="font-medium text-sm">{title}</span>
    </button>
  );
};

const albums = [
  {
    id: 1,
    title: "Discover",
    to: "/",
  },
  {
    id: 2,
    title: "Around You",
    to: "/around-you",
  },
  {
    id: 3,
    title: "Top Chart",
    to: "/top-chart",
  },
  {
    id: 4,
    title: "top artists",
    to: "/top-artists",
  },
];

function Sidebar() {
  return (
    <div className="text-gray-300 space-y-5 h-[100vh]  px-5 py-10">
      <div className="space-y-3">
        <Bar Icon={Home} title="Home" />
        <Bar Icon={Search} title="Search" to="/?q=search" />
        <Bar Icon={Library} title="Your Library" />
      </div>
      <div className="pt-5 space-y-3 border-b border-gray-800 pb-5">
        <Bar Icon={Plus} title="Create Playlist" />
        <Bar Icon={Heart} title="Liked Songs" />
      </div>
      {/* albums */}
      <div className="space-y-3">
        {albums.map((album) => (
          <div className="capitalize hover:text-white cursor-pointer text-sm font-bold">
            <Link key={album.id} to={album.to}>
              {album.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
