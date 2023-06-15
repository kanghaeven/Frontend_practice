import './App.css';
import Hello from './component/Hello';

function App() {

  return (
    <div className="App">
      <Hello age={18} />
      <Hello age={25} />
      <Hello age={22} />
    </div>
  );
}

export default App;
