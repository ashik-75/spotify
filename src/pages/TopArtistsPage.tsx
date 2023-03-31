import { useQuery } from "@tanstack/react-query";
import ArtistList from "../components/ArtistList";
import SongListSkeleton from "../components/Skeleton/SongListSkeleton";
import { getData } from "../services/shazam";

function TopArtistsPage() {
  const {
    data: songs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["top-chart"],
    queryFn: () => getData("charts/world"),
  });
  return (
    <div className="px-5 py-10">
      <h1 className="font-bold text-2xl text-gray-200 mb-10">Top Artists</h1>
      <div>
        {isLoading ? (
          <SongListSkeleton />
        ) : isError ? (
          <div>Error</div>
        ) : (
          <ArtistList songs={songs} />
        )}
      </div>
    </div>
  );
}

export default TopArtistsPage;
