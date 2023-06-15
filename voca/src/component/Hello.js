import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {

  // let name = "Haeven"; // Vanilla JS
  
  console.log(age);

  const [name, setName] = useState('Haeven');
  // const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인입니다." : "미성년자입니다.";
  
  function changeName() {
    // name = name === "Haeven" ? "Aubeuhi" : "Haeven"; // Vanilla JS
    // document.getElementById("name").innerText = name; // Vanilla JS
    
    console.log(name);

    // setName(name === "Haeven" ? "Aubeuhi" : "Haeven");
  }

  return (
    <div>
      <h1>State</h1>
      <h2>컴포넌트의 속성값</h2>
      <UserName name={name} />
      <h3 id="name">{name}({age}) : {msg}</h3>
      {/* <button onClick={changeName}>Change</button> */}
      <button onClick={() => {
        setName(name === "Haeven" ? "Aubeuhi" : "Haeven");
        // setAge(age + 1);
      }}>Change</button>
    </div>

  );
}