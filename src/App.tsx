import TodoApp from "./components/TodoApp";
import "./components/style.css";

const App = () => {
	return (
		<div className="row container p-0 m-0 mx-auto">
			<div className="col-md-12 pt-3">
				<TodoApp />
			</div>
		</div>
	);
};
export default App;
