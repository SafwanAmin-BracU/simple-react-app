import { useState } from "react";
import TodoItemsGroup from "./TodoItemsGroup";
import TodoInputGroup from "./TodoInputGroup";
import "./style.css";

interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

const TodoApp = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const removeTodo = (id: string) =>
		setTodos(() => {
			console.log(`Removing todo with id: ${id}`);
			return todos.filter((todo) => todo.id !== id);
		});

	return (
		<div className="card px-1">
			<div className="card-body">
				<h4 className="card-title">Awesome Todo list</h4>
				<TodoInputGroup
					todos={todos}
					setTodos={setTodos}
				/>
				<TodoItemsGroup
					todos={todos}
					setTodos={setTodos}
					removeTodo={removeTodo}
				/>
			</div>
		</div>
	);
};

export type { Todo };
export default TodoApp;
