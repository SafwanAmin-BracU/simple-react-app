import { Todo } from "./TodoApp";
import TodoItem from "./TodoItem";
import "./style.css";

interface TodoItemsGroupProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	removeTodo: (id: string) => void;
}

const TodoItemsGroup = ({ todos, removeTodo }: TodoItemsGroupProps) => {
	return (
		<div className="list-wrapper">
			<ul className="d-flex flex-column-reverse todo-list">
				{todos.map((todo) => {
					return (
						<TodoItem
							todo={todo}
							key={todo.id}
							removeTodo={removeTodo}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoItemsGroup;
