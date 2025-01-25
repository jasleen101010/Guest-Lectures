// Note that there are several drawbacks with the way this app works
// Try to improve it using your knowledge
// Use React official documentation: https://reactjs.org/
// Simple example of state hook: https://www.vitainbeta.org/2021/05/03/learn-react-from-scratch-usestate-react-state-hook/

import React, { useState } from 'react'
import './App.css';


function App() {
  const [item, setItem] = useState('')
  const [todos, setDotos] = useState([1, 2, 3])


  const handleSubmit = (event) => {
    event.preventDefault()
    setDotos([...todos, item])
    setItem('')
  }

  const handleItem = (event) => {
    console.log(event)
    setItem(event.target.value)
  }

  const handleDelete = (todo) => {
    setDotos(todos.filter(todoElement => todoElement !== todo))
  }

  console.log('todos', todos)
  return (
    <div className="App">
      <header className="App-header">
        Todo
          <form onSubmit={handleSubmit} >
          <input
            placeholder="Add item"
            value={item}
            onChange={handleItem}
          />
          <button type='submit'>Submit</button>
        </form>
        List
        <ul>
          {
            todos.map(todo => {
              return <li><button onClick={() => handleDelete(todo)}>X</button> {todo}</li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
