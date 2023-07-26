import "./App.css";
import CardComponent from "./components/CardComponent";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <div className="cardSide">
        <CardComponent />
      </div>
      <div className="formSide">
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
