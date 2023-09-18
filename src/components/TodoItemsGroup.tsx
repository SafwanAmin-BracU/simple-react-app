import { Todo } from "./TodoApp";
import TodoItem from "./TodoItem";
import "./style.css";

interface TodoItemsGroupProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	removeTodo: (id: string) => void;
	toggleTodo: (id: string, value: boolean) => void;
}

const TodoItemsGroup = ({
	todos,
	removeTodo,
	toggleTodo,
}: TodoItemsGroupProps) => {
	return (
		<ul
			id="list"
			className="m-3 d-flex flex-column gap-2"
		>
			{todos.map((todo) => {
				return (
					<TodoItem
						todo={todo}
						key={todo.id}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
					/>
				);
			})}
		</ul>
	);
};

export default TodoItemsGroup;
