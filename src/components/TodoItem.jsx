// export const TodoItem = ({ id, text, completed, toggleTodoStatus, removeTodo }) => {
import { useDispatch } from "react-redux"
import { removeTodo } from "../store/todoSlice"

export const TodoItem = ({ id, text, completed, toggleTodoStatus }) => {
  const dispatch = useDispatch()

  return (
    <li key={id}>
      <input type='checkbox' checked={completed} onChange={() => toggleTodoStatus(id)} />
      <span>{text}</span>
      <span style={{ color: 'red' }} onClick={() => dispatch(removeTodo({ id }))} >&times;</span>
    </li>
  )
}
