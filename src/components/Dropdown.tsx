import Select from "react-select";

type PropsType = {
  label: string;
  value: { label: string; value: string };
  handleCurrency: (info: { label: string; value: string }) => void;
  payload: any;
};

function Dropdown({ payload, label, value, handleCurrency }: PropsType) {
  const formatted = Object.keys(payload).map((currency) => {
    return {
      label: `${currency}-${payload[currency]}`,
      value: currency,
    };
  });

  return (
    <div className="w-[350px]">
      <label htmlFor="">{label}</label>
      <Select
        value={value}
        onChange={(e) => {
          handleCurrency(e!);
        }}
        isClearable={true}
        isSearchable={true}
        options={formatted}
      />
    </div>
  );
}

export default Dropdown;
