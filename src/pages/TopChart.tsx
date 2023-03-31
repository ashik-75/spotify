import { useQuery } from "@tanstack/react-query";
import SongListSkeleton from "../components/Skeleton/SongListSkeleton";
import SongList from "../components/SongList";
import { getData } from "../services/shazam";

function TopChart() {
  const {
    data: songs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["top-chart"],
    queryFn: () => getData("charts/world"),
  });
  return (
    <div className="p-5">
      {isLoading ? (
        <SongListSkeleton />
      ) : isError ? (
        <div>Error</div>
      ) : (
        <SongList songs={songs} />
      )}
    </div>
  );
}

export default TopChart;
