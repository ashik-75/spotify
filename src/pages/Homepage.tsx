import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Banner from "../components/Banner";
import SongListSkeleton from "../components/Skeleton/SongListSkeleton";
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
    <div>
      <Banner />
      <div className="p-5">
        {isLoading ? (
          <SongListSkeleton />
        ) : isError ? (
          <div>Error</div>
        ) : (
          <SongList songs={data} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
