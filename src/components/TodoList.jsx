import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

// export const TodoList = ({ todos, toggleTodoStatus, removeTodo }) => {
export const TodoList = ({ toggleTodoStatus }) => {
  const todos = useSelector(state => state.todos.todos)
  return (
    <ul>
      {
        todos.map(todo => <TodoItem
          toggleTodoStatus={toggleTodoStatus}
          key={todo.id} {...todo} />)
      }
    </ul>
  )
}
