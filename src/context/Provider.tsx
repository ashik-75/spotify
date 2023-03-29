import React, { createContext, useContext, useState } from "react";

type ContextType = {
  fromCurrency: { label: string; value: string };
  toCurrency: { label: string; value: string };
  handleFromCurrency: (pay: { label: string; value: string }) => void;
  handleToCurrency: (pay: { label: string; value: string }) => void;
  swapCurrency: () => void;
};

const CurrencyContext = createContext({} as ContextType);

function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [fromCurrency, setFromCurrency] = useState({ label: "", value: "" });
  const [toCurrency, setToCurrency] = useState({ label: "", value: "" });

  const handleFromCurrency = (value: { label: string; value: string }) => {
    console.log({ value });
    setFromCurrency(value);
  };
  const handleToCurrency = (value: { label: string; value: string }) => {
    setToCurrency(value);
  };
  const swapCurrency = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  };

  return (
    <CurrencyContext.Provider
      value={{
        fromCurrency,
        handleFromCurrency,
        toCurrency,
        handleToCurrency,
        swapCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyProvider;

export const useCurrency = () => {
  return useContext(CurrencyContext);
};
