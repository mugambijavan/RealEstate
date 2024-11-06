import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-key': '5faf2b9a81msh065e47c41716998p1171e3jsn387beb54c472',
      'x-rapidapi-host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}