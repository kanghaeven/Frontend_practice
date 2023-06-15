
import './App.css';
import Hello from './component/Hello';

function App() {
  const name = 'Haeven'
  const naver = {
    name: '네이버',
    url: 'https://naver.com',
  };

  return (
    <div className="App">
      <h1
        style={{
          color: '#f0f',
          backgroundColor: 'green',
        }}
      >
        Welcome, {name}.
        <p>{2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
