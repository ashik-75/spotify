import { useQuery } from "@tanstack/react-query";
import { ArrowLeftRight } from "lucide-react";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Loader from "../components/Loader";
import { useCurrency } from "../context/Provider";
import { getConvertionRate, getData } from "../services/exchage";

function Payment() {
  const {
    data: currencies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latest"],
    queryFn: () => getData("/currencies.json"),
  });

  const {
    fromCurrency,
    handleFromCurrency,
    toCurrency,
    handleToCurrency,
    swapCurrency,
  } = useCurrency();

  const [amount, setAmount] = useState("");
  const [convertionData, setConvertionData] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ amount, toCurrency, fromCurrency });
    setLoading(true);
    getConvertionRate(
      `/exchange?from=${fromCurrency.value}&to=${toCurrency.value}`
    )
      .then((res) => {
        setLoading(false);
        setConvertionData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err?.message);
      });
  };

  console.log("C: ", convertionData);

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
            <>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-5 items-center">
                  <div>
                    <label htmlFor="input" className="block">
                      Enter Amount
                    </label>
                    <input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      type="text"
                      placeholder="..."
                      className="px-4 py-1.5 rounded border outline-none"
                    />
                  </div>
                  <Dropdown
                    label="From"
                    value={fromCurrency}
                    handleCurrency={(dt) => handleFromCurrency(dt)}
                    payload={currencies}
                  />
                  <button
                    onClick={swapCurrency}
                    type="button"
                    className="bg-gray-100 rounded-full p-4 hover:bg-gray-200"
                  >
                    <ArrowLeftRight className="w-5 h-5" />
                  </button>
                  <Dropdown
                    label="To"
                    value={toCurrency}
                    handleCurrency={handleToCurrency}
                    payload={currencies}
                  />
                </div>
                <div className="mt-10 flex items-center justify-center">
                  <button
                    type="submit"
                    className="px-4 py-2 flex items-center gap-x-2 bg-purple-600 rounded text-white font-medium"
                  >
                    <span>Convert Currency</span>
                    {loading && <Loader />}
                  </button>
                </div>
              </form>

              <div>
                {convertionData && (
                  <div>
                    <p>
                      <span className="font-bold text-pink-500">{amount}</span>{" "}
                      <span className="text-sm text-gray-700">
                        {fromCurrency.label}
                      </span>{" "}
                      --{" "}
                      <span className="font-bold text-pink-500">
                        {(Number(amount) * convertionData).toFixed(2)}
                      </span>{" "}
                      <span className="text-sm text-gray-700">
                        {toCurrency.label}
                      </span>
                    </p>
                    <p>
                      <span className="font-bold text-pink-500 mr-3">1</span>{" "}
                      <span className="text-sm text-gray-700">
                        {fromCurrency.label}
                      </span>{" "}
                      --{" "}
                      <span className="font-bold text-pink-500">
                        {convertionData.toFixed(2)}
                      </span>{" "}
                      <span className="text-sm text-gray-700">
                        {toCurrency.label}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
