import { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";
export default function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const store = (inpValue) => {
    setValue(inpValue);
    console.log(value);
  };
  const addTodo = () => {
    setItems((prevState) => [...prevState, value]);
    setValue("");
  };
  const checked = (id) => {
    setItems((prevState) => {
      return prevState.filter((val, ind) => ind !== id);
    });
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        name="items"
        value={value}
        onChange={(e) => store(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <div>
        {items.map((item, ind) => {
          return <TodoList lochecked={checked} value={item} index={ind} />;
        })}
      </div>
    </div>
  );
}
