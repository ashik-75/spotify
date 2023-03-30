import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Banner from "../components/Banner";
import SongList from "../components/SongList";
import { getData } from "../services/shazam";

function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get("genre") || "POP";
  const { data, isLoading, isError } = useQuery({
    queryKey: ["discovery", genre],
    queryFn: () => getData(`charts/genre-world?genre_code=${genre}`),
  });

  return (
    <div className="bg-zinc-900 h-[100vh] overflow-y-scroll scrollbar-hide">
      <Banner />
      {isLoading ? (
        <div>Loading ...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <SongList songs={data} />
      )}
    </div>
  );
}

export default Homepage;
