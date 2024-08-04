import { useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')


  const addTodo = () => {
    if (text.trim().length) {
      console.log(text)
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('')
    }
  }

  return (
    <>
      <label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </label>
      <ul>
        {todos.map(todo => <li key={todo.id}>
          <input type='checkbox' />
          <span>{todo.text}</span>
          <span style={{ color: 'red' }}>&times;</span>
        </li>)}
      </ul>
    </>
  )
}
export default App
