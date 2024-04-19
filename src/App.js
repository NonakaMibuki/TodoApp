import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [ todo, setTodo ] = useState([]);

  return (
    <div className="App">
      <h1>Todo List</h1>

      <Form todo={todo} setTodo={setTodo}/>
      <List todo={todo} setTodo={setTodo}/>
     
    </div>
  );
}

export default App;
