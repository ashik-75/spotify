import { useQuery } from "@tanstack/react-query";
import SongListSkeleton from "../components/Skeleton/SongListSkeleton";
import SongList from "../components/SongList";
import { getData } from "../services/shazam";

function AroundYou() {
  const {
    data: songs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["around-you"],
    queryFn: () => getData("charts/country?country_code=US"),
  });
  return (
    <div className="p-5">
      <h1 className="mb-5 font-bold text-2xl text-gray-200">Around Me</h1>
      <div>
        {isLoading ? (
          <SongListSkeleton />
        ) : isError ? (
          <div>Error</div>
        ) : (
          <SongList songs={songs} />
        )}
      </div>
    </div>
  );
}

export default AroundYou;
