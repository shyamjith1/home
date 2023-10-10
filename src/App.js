import { Link, Outlet } from 'react-router-dom';
import './App.css';


export function App() {
  return (
    <div className="App">
      <Link to={"/home"}>Home</Link>
      <Link to={"/contact"}>contact</Link>
      <Link to={"/todos"}>Todos</Link>
      <Outlet/>
    </div>
  );
}

export default App;
