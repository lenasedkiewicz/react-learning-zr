import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="">
          <h1>Do zrobienia</h1>
          <h2>5 zadań</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        <ToDoItem name="Nauka Pythona" done={false} />
        <ToDoItem name="Wyzwanie AI" done={true} />
      </ul>
    </div>
  );
}

export default App;
