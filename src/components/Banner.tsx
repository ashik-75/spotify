import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const genres = [
  {
    label: "POP",
    value: "POP",
  },
  {
    label: "HIP_HOP_RAP",
    value: "HIP_HOP_RAP",
  },
  {
    label: "DANCE",
    value: "DANCE",
  },
  {
    label: "ELECTRONIC",
    value: "ELECTRONIC",
  },
  {
    label: "SOUL_RNB",
    value: "SOUL_RNB",
  },
];

function Banner() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const shouldSearchBarOpen = searchParams.get("q") === "search";
  const [searchInfo, setSearchInfo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchInfo}`);
  };
  return (
    <div>
      {/* sticky nav */}
      <div className=" top-0 left-0 bg-sky-800/50 sticky h-[80px] w-full md:px-5 px-2">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2 md:gap-5">
            <button className="p-1 flex justify-center items-center rounded-full bg-gray-800 text-white">
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button className="p-1 flex justify-center items-center rounded-full bg-gray-800 text-white">
              <ChevronRight className="h-7 w-7" />
            </button>

            {shouldSearchBarOpen ? (
              <form onSubmit={handleSearch}>
                <input
                  onChange={(e) => setSearchInfo(e.target.value)}
                  className="px-6 py-2 rounded-3xl outline-none border placeholder:text-sm"
                  type="search"
                  placeholder="Artist, album, song"
                />
              </form>
            ) : (
              <div className="flex gap-3 items-center">
                <button className=" p-1 rounded-full bg-green-500 text-white flex justify-center items-center">
                  <Play className="w-7 h-7" />
                </button>

                <div className="font-bold text-white md:text-3xl">
                  {selectedCategory.split("_").join(" ") || "POP"}
                </div>
              </div>
            )}
          </div>

          <div>
            <select
              onChange={(e) => {
                navigate(`?genre=${e.target.value}`);
                setSelectedCategory(e.target.value);
              }}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              {genres.map((genre) => (
                <option value={genre.value}>{genre.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* banner details */}
      <div className="h-[400px] w-full bg-gradient-to-b from-purple-500 to-zinc-900 flex flex-col md:flex-row gap-10 items-start md:items-end p-10">
        <div className="h-[250px] w-[300px] overflow-hidden">
          <img
            src="/s-3.jpg"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div className="space-y-3">
          <p className="font-medium text-white">Public Playlist</p>
          <h1 className="md:text-7xl text-3xl font-extrabold text-white">
            {selectedCategory.split("_").join(" ") || "POP"}
          </h1>
          <p className="text-white font-medium">no. 28 songs, 1hr 49 min</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
