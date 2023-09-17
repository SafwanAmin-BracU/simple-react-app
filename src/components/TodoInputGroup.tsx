import { useEffect, useState } from "react";
import { Todo } from "./TodoApp";
import "./style.css";

interface TodoInputGroupProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoInputGroup = ({ todos, setTodos }: TodoInputGroupProps) => {
	const [newTodoText, setNewTodoText] = useState("");
	useEffect(() => {
		setNewTodoText("");

		return () => {};
	}, []);

	const addTodo = () => {
		if (newTodoText === "") {
			return;
		}

		const newTodo: Todo = {
			id: crypto.randomUUID(),
			text: newTodoText.trim(),
			completed: false,
		};
		setTodos(() => [...todos, newTodo]);
		setNewTodoText("");
	};

	return (
		<div className="add-items d-flex">
			<input
				type="text"
				className="form-control todo-list-input"
				placeholder="What do you need to do today?"
				onChange={(e) => setNewTodoText(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && addTodo()}
				value={newTodoText}
			/>
			<button
				className="add btn btn-primary font-weight-bold todo-list-add-btn"
				onClick={addTodo}
			>
				Add
			</button>
		</div>
	);
};

export default TodoInputGroup;
