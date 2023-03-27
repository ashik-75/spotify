import axios from "axios";

const BASE_URL = "https://openexchangerates.org/api";
export async function getData(path: string) {
  const url = `${BASE_URL}${path}`;
  console.log(url);

  const data = await axios.get(url, {
    params: {
      app_id: "5b9749cb2bb54f4c89703abbd1ad47be",
    },
  });

  return data.data;
}
