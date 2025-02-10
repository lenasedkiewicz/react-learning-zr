import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";

function getSubheading(numberOfTasks) {
  switch (true) {
    case numberOfTasks > 4:
      return `${numberOfTasks} zadań`;
    case numberOfTasks > 1:
      return `${numberOfTasks} zadania`;
    case numberOfTasks === 1:
      return `${numberOfTasks} zadanie`;
    default:
      return `brak zadań`;
  }
}

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
          <h2>{getSubheading(todos.length)}</h2>
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
