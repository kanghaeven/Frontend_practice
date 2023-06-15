import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="/*" element={<EmptyPage />} /> {/* 나머지 전체 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
