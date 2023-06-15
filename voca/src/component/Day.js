import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";
// import { useEffect, useState } from "react";

export default function Day() {

  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`)

  // const wordList = dummy.words.filter(word => (
  //   word.day === Number(day)
  // ))

  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setWords(data);
  //     });
  // }, [day]); // 의존성 배열에 값을 넣어 최신값이라는 걸 보장한다.


  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
            ))}
        </tbody>
      </table>
    </>
  );
}