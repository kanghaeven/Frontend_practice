import { useEffect, useState } from "react";

export default function useFetch(url) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]); // 의존성 배열에 값을 넣어 최신값이라는 걸 보장한다.

  return data;
}