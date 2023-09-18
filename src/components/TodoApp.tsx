import { useState } from "react";
import TodoItemsGroup from "./TodoItemsGroup";
import TodoInputGroup from "./TodoInputGroup";
import "./style.css";
import { BsStarFill } from "react-icons/bs";

// get today's date
const today = new Date();

interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

const TodoApp = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const removeTodo = (id: string) =>
		setTodos(() => {
			return todos.filter((todo) => todo.id !== id);
		});
	const toggleTodo = (id: string, value: boolean) => {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				todo.id === id && (todo.completed = value);
				return todo;
			});
		});
	};

	return (
		<>
			<BsStarFill className="h1 mx-auto w-100 mt-3 text-primary" />
			<p className="text-center m-3">{today.toDateString()}</p>
			<TodoInputGroup
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoItemsGroup
				todos={todos}
				setTodos={setTodos}
				removeTodo={removeTodo}
				toggleTodo={toggleTodo}
			/>
		</>
	);
};
export type { Todo };
export default TodoApp;
