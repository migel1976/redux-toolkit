import { useState } from "react"
import './App.css'
import { TodoList } from "./components/TodoList"
import { InputField } from "./components/InputField"

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
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList todos={todos}
        toggleTodoStatus={toggleTodoStatus}
        removeTodo={removeTodo}
      />
    </div>
  )
}
export default App
