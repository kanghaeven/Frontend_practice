
import './App.css';
import styles from './App.module.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {

  return (
    <div className="App">
      <Welcome />

      <Hello />

      <div className={styles.box}>app</div>
    </div>
  );
}

export default App;
