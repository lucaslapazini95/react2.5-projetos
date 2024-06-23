import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <h1>React com TS</h1>
      {/* 1 - Componente Funcional com TS */}
      <Greeting name="Lucas" />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulacao de eventos co tipos */}
      <TextInput />
    </>
  );
}

export default App;
