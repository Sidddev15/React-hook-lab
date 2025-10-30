import "./App.css";
import Counter from "./components/Counter";
import DocTitle from "./components/Doctitle";
import FocusInput from "./components/FocusInput";
import KeyPressListener from "./components/KeypressListener";
import RenderCount from "./components/RenderCount";
import Stopwatch from "./components/Stopwatch";
import Ticker from "./components/Ticker";
import WindowSize from "./components/WindowSize";

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <Counter />
      </div>
      <div className="grid-item">
        <WindowSize />
      </div>
      <div className="grid-item">
        <Ticker />
      </div>
      <div className="grid-item">
        <DocTitle />
      </div>
      <div className="grid-item">
        <KeyPressListener />
      </div>
      <div className="grid-item">
        <Stopwatch />
      </div>
      <div className="grid-item">
        <FocusInput />
      </div>
      <div className="grid-item">
        <RenderCount />
      </div>
    </div>
  );
}

export default App;
