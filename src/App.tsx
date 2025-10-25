import "./App.css";
import Counter from "./components/Counter";

function App() {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "nowrap",
				gap: "10px",
				padding: "10px",
			}}
		>
			<div style={{ flex: "1 1 33.33%", maxWidth: "33.33%" }}>
				<Counter />
			</div>
		</div>
	);
}

export default App;
