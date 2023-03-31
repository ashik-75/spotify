import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import SongListSkeleton from "../components/Skeleton/SongListSkeleton";
import SongList from "../components/SongList";
import { getData } from "../services/shazam";

function SearchTerm() {
  const { searchTerm } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () =>
      getData(`search/multi?query=${searchTerm}&search_type=SONGS`),
  });

  return (
    <div className="text-gray-100 px-5 py-10">
      <h1 className="mb-10 text-2xl font-mont font-bold">
        Search for - {searchTerm}
      </h1>

      <div>
        {isLoading ? (
          <SongListSkeleton />
        ) : isError ? (
          <div>Error</div>
        ) : (
          <SongList songs={data?.tracks?.hits.map((item: any) => item.track)} />
        )}
      </div>
    </div>
  );
}

export default SearchTerm;
