import { useState } from 'react';
import { Button, Input } from 'antd-mobile';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button className={styles.btn}>哈哈哈</Button>
      <Input></Input>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button className={styles.btn}>哈哈哈</Button>
      <Input></Input>
    </div>
  );
}

export default App;
