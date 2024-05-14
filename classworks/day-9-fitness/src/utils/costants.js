import axios from "axios";
import { useEffect, useState } from "react";

function useFetch({ method = "get", url = "" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({
      method: method,
      url: url,
      headers: {
        "X-RapidAPI-Key": "bff9801c5emsh3c27ebccd0dd335p13e6a4jsn912522142576",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
