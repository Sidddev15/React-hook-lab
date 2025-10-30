import "./App.css";
import Counter from "./components/Counter";
import DocTitle from "./components/Doctitle";
import KeyPressListener from "./components/KeypressListener";
import Stopwatch from "./components/Stopwatch";
import Ticker from "./components/Ticker";
import WindowSize from "./components/WindowSize";

function App() {
	return (
		<div className="grid-container">
      <div className="grid-item"><Counter /></div>
      <div className="grid-item"><WindowSize /></div>
      <div className="grid-item"><Ticker /></div>
      <div className="grid-item"><DocTitle /></div>
      <div className="grid-item"><KeyPressListener /></div>
      <div className="grid-item"><Stopwatch /></div>
    </div>
	);
}

export default App;
