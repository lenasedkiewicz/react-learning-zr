import { Form } from "./components/Form";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <LikesCounter />
      <Plot />
      <Reviews />
      <Form />
    </>
  );
}

export default App;
