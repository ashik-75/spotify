import { Link } from "react-router-dom";

function ArtistList({ songs }: any) {
  return (
    <div className="grid-cols-6 gap-5 grid">
      {songs.map((song: any) => (
        <div className="space-y-2">
          <div className=" rounded-xl overflow-hidden cursor-pointer">
            <img
              src={song?.images?.coverart}
              alt=""
              className="hover:scale-110 transition-all"
            />
          </div>

          <div>
            <Link to={`/artists/${song?.artists?.[0]?.adamid}`}>
              <h1 className="font-bold text-gray-400 hover:text-white">
                {song?.subtitle}
              </h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtistList;
