import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current !== null) return; // already running
    intervalRef.current = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  // cleanup on unmount
  useEffect(() => {
    return stop;
  }, []);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2>Stopwatch(ref for timer)</h2>
      <output>{seconds}</output>
      <div style={{display: 'flex', gap: '10px', justifyContent: 'center', paddingTop: '10px'}}>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}