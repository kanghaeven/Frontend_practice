import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import { useEffect, useState } from "react";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  // const [days, setDays] = useState([]);

  // useEffect(() => { // 어떤 상태값이 바뀌었을 때 동작하는 함수 작성
  //   fetch('http://localhost:3001/days')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setDays(data);
  //     })
  // }, []); 

  return (
    <>
      <ul className="list_day">
        {days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>
              Day {day.day}
            </Link>
          </li>
          ))}
        <li></li>
      </ul>
    </>
  );
}