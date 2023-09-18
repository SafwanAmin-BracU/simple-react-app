import { Todo } from "./TodoApp";
import "./style.css";
import { FaTrash } from "react-icons/fa6";

interface TodoItemProps {
	todo: Todo;
	removeTodo: (id: string) => void;
	toggleTodo: (id: string, value: boolean) => void;
}

const TodoItem = ({ todo, removeTodo, toggleTodo }: TodoItemProps) => {
	return (
		<li className="list-item d-flex align-items-center px-2 py-2 border border-1 shadow-sm rounded-2 text-dark">
			<label className="list-item-label">
				<input
					type="checkbox"
					defaultChecked={todo.completed}
					data-list-item-checkbox
					className="form-check-input mx-3"
					onChange={(e) => toggleTodo(todo.id, e.target.checked)}
				/>
				<span
					data-list-item-text
					className="list-item-text"
				>
					{todo.text}
				</span>
			</label>
			<button
				className="btn btn-outline-danger btn-sm ms-auto d-flex align-items-center gap-1"
				onClick={() => removeTodo(todo.id)}
				data-button-delete
			>
				<FaTrash />
				DELETE
			</button>
		</li>
	);
};

export default TodoItem;
