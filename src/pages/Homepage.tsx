import { useQuery } from "@tanstack/react-query";
import { ArrowLeftRight } from "lucide-react";
import Dropdown from "../components/Dropdown";
import { getData } from "../services/exchage";

function Homepage() {
  const {
    data: currencies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latest"],
    queryFn: () => getData("/currencies.json"),
  });

  return (
    <div className="p-5">
      <div className="max-w-7xl mx-auto space-y-4">
        <h1>Currencies</h1>
        <div>
          {isLoading ? (
            <div>Loading ...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <form className="flex gap-5 items-center">
              <input
                type="text"
                className="px-4 py-1.5 rounded border outline-none"
              />
              <Dropdown payload={currencies} />
              <button
                type="button"
                className="bg-gray-100 rounded-full p-4 hover:bg-gray-200"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>
              <Dropdown payload={currencies} />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
