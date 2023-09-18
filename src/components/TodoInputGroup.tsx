import { useEffect, useState } from "react";
import { Todo } from "./TodoApp";
import "./style.css";
import { BiAddToQueue } from "react-icons/bi";

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
		// console.log(newTodo);
		setTodos(() => [...todos, newTodo]);
		setNewTodoText("");
	};

	return (
		<div
			// id="new-todo-form"
			className="input-group p-3"
		>
			<input
				type="text"
				id="newTodoInput"
				className="form-control"
				value={newTodoText}
				onChange={(e) => setNewTodoText(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && addTodo()}
			/>
			<button
				className="btn btn-outline-primary d-flex align-items-center gap-1"
				onClick={addTodo}
			>
				<BiAddToQueue />
				Add Todo
			</button>
		</div>
	);
};

export default TodoInputGroup;
