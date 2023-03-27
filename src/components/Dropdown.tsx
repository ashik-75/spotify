import Select from "react-select";

function Dropdown({ payload }: any) {
  const formatted = Object.keys(payload).map((currency) => {
    return {
      label: `${currency}-${payload[currency]}`,
      value: currency,
    };
  });
  return (
    <div>
      <Select
        isClearable={true}
        isSearchable={true}
        defaultValue={formatted?.[0]}
        options={formatted}
      />
    </div>
  );
}

export default Dropdown;
