import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodoStatus, removeTodo }) => {
  return (
    <ul>
      {
        todos.map(todo => <TodoItem
          toggleTodoStatus={toggleTodoStatus}
          removeTodo={removeTodo}
          key={todo.id} {...todo} />)
      }
    </ul>
  )
}
