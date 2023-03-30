import { useQuery } from "@tanstack/react-query";
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
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <SongList songs={songs} />
      )}
    </div>
  );
}

export default TopChart;
