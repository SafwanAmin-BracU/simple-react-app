import { Todo } from "./TodoApp";
import "./style.css";

interface TodoItemProps {
	todo: Todo;
	removeTodo: (id: string) => void;
}

const TodoItem = ({ todo, removeTodo }: TodoItemProps) => {
	return (
		<div className="">
			<li>
				<div className="form-check">
					<label className="form-check-label">
						<input
							className="checkbox"
							type="checkbox"
							value={todo.completed ? "1" : "0"}
						/>
						{todo.text}
						<i className="input-helper"></i>
					</label>
				</div>
				<i
					className="remove mdi mdi-close-circle-outline"
					onClick={() => removeTodo(todo.id)}
				></i>
			</li>
		</div>
	);
};

export default TodoItem;
