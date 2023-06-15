

export default function Hello() {

  function showName() {
    console.log("Haeven");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt)
  }

  return (
    <div>
      <p>Hello</p>

      <button onClick={showName}>Show name</button>
      <button onClick={() => {
        showAge(30); // 매개변수 전달하기 좋음
      }}>Show age</button>
      <input type="text" onChange={e => {
        const txt = e.target.value;
        showText(txt);
      }}/>
    </div>

  );
}