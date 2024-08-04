export const TodoItem = ({ id, text, completed, toggleTodoStatus, removeTodo }) => {
  return (
    <li key={id}>
      <input type='checkbox' checked={completed} onChange={() => toggleTodoStatus(id)} />
      <span>{text}</span>
      <span style={{ color: 'red' }} onClick={() => removeTodo(id)} >&times;</span>
    </li>
  )
}
