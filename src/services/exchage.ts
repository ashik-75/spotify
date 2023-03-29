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

export async function getConvertionRate(path: string) {
  const url = `https://currency-exchange.p.rapidapi.com${path}`;
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "0e7881138amsh8a0036d702a66a8p1b519bjsn6b2465917ddb",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  });

  return response.data;
}
