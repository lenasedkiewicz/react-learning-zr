import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";

function App() {
  const todos = [
    { name: "Nauka Pythona", done: false, id: 1 },
    { name: "Wyzwanie AI", done: true, id: 2 },
  ];
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
        {todos.map(({ id, name, done }) => (
          <ToDoItem key={id} name={name} done={done} />
        ))}
      </ul>
    </div>
  );
}

export default App;
