import axios from "axios";

const BASE_URL = `https://shazam-core.p.rapidapi.com/v1`;

export async function getData(path: string) {
  const url = `${BASE_URL}/${path}`;
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "0e7881138amsh8a0036d702a66a8p1b519bjsn6b2465917ddb",
      "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
  });

  return response.data;
}
