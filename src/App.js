import "./styles.css";
import Button from "./components/Button";

const App = () => {
  let hi = "hi";
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{hi}</h2>

      <Button />
    </div>
  );
};

export default App;
