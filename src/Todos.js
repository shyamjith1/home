import "./App";
import axios from 'axios'
import { useEffect, useState } from "react";
export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {

      setTodos(res.data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {
        todos.map((x) => {
          return <p key={x.id}>{x.title}</p>
        })
      }
    </div>
  );
}