import "./App.css";
import { Ex1 } from "./code-examples/ex1";
import { Ex2 } from "./code-examples/ex2";
import { Ex4 } from "./code-examples/ex4";
import { Ex3 } from "./code-examples/ex3";
import { Ex5 } from "./code-examples/ex5";
import { Game } from "./code-examples/Game";

function App() {
  return (
    <div className="App">
      {/* <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
      <Ex5 /> */}
      <h1>XO Game</h1>
      <Game />
    </div>
  );
}

export default App;
