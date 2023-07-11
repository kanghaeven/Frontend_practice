import React from "react";
import reactLogoPath from './assets/ReactLogo.svg'


function App() {
  return (
    <div>
    <h1 className="headline">React is Awesome</h1>
    <h2>정적 에셋</h2>
    <img src="/ReactLogo.svg" alt="React Logo" />
    <h2>동적 에셋</h2>
    <img src={reactLogoPath} alt="React Logo Path" />
  </div>
  );
}

export default App;
