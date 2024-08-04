import { useState } from "react"
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  console.log('todo is ', todos)


  const addTodo = () => {
    if (text.trim().length) {
      console.log(text)
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: true
        }
      ])
      setText('')
    }
  }


  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='App'>
      <label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </label>
      <ul>
        {todos.map(todo => <li key={todo.id}>
          <input type='checkbox' checked={todo.completed} onChange={() => toggleTodoStatus(todo.id)} />
          <span>{todo.text}</span>
          <span style={{ color: 'red' }} onClick={() => removeTodo(todo.id)} >&times;</span>
        </li>)}
      </ul>
    </div>
  )
}
export default App
