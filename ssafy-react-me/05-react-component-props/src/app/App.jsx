/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

//

import { DescriptionList, ScrollButton } from "../components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React 컴포넌트 &amp; Props</h1>

      <hr />

      <DescriptionList />

      <ScrollButton.Group>
        <ScrollButton mode="up" />
        <ScrollButton mode="down" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
