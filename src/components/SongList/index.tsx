import { Clock } from "lucide-react";

function SongList({ songs }: any) {
  console.log(songs);
  return (
    <table className="text-gray-300 w-full font-mont ">
      <thead className="border-b border-b-gray-800">
        <tr className="  text-left uppercase tracking-widest">
          <th className="p-2 text-xs"># title</th>
          <th className="p-2 text-xs hidden">Album</th>
          <th className="p-2 text-xs hidden">Date Added</th>
          <th className="p-2 hidden">
            <Clock className="w-5 h-5" />
          </th>
        </tr>
      </thead>

      <tbody>
        {songs?.map((song: any, index: number) => (
          <tr className="hover:bg-zinc-800 cursor-pointer my-10" key={song.key}>
            <td className="flex gap-5 items-center p-4">
              <span className="font-medium">{index + 1}</span>
              <img
                className="h-10 w-10 rounded object-cover object-center"
                src={song.images?.coverarthq}
                alt=""
              />
              <div className="font-medium text-sm">
                <p>{song.title}</p>
                <p className="text-sm text-gray-400">{song?.subtitle}</p>
              </div>
            </td>
            <td className="p-4 text-sm font-medium hidden">{song?.subtitle}</td>
            <td className="p-4 text-sm font-medium hidden">
              {song?.date || "Dec 11,2022"}
            </td>
            <td className="p-4 text-sm font-medium hidden">
              {song?.duration || "6:33"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SongList;
