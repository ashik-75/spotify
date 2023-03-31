function SongListSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(15).keys()].map((num) => (
        <div key={num} className="space-y-2">
          <div className="bg-zinc-800 rounded-xl w-[50%] sm:w-[25%] h-3 animate-pulse"></div>
          <div className="bg-zinc-800 rounded-xl w-[75%] sm:w-[35%] h-3 animate-pulse"></div>
          <div className="bg-zinc-800 rounded-xl w-[100%] sm:w-[50%] h-3 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default SongListSkeleton;
