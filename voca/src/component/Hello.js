import World from "./World";
import styles from "./Hello.module.css"


export default function Hello() {
  return (
    <div>
      <p style={{
        color: '#f00',
        borderRight: '2px solid #000',
        marginBottom: '30px',
        opacity: 0.5
      }}>Hello</p>
      <World />
      <World />
      <div className={styles.box}>hello</div>
    </div>

  );
}