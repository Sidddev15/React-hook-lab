import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

export default function Ticker() {
  const [tick, setTick] = useState(0);
  const [enabled, setEnabled] = useState(false);

  useInterval(() => setTick(t => t + 1), enabled ? 1000 : null);

  return (
    <section style={{ height: "100%", width: "auto", padding: "20px"}}>
      <h2 style={{ padding: "0 0 40px"}}>Ticker (Custom Interval hook)</h2>
      <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'  }}>
        <output aria-live="polite">{tick}s</output>
        <button aria-pressed={enabled} onClick={() => setEnabled(e => !e)}>
          {enabled ? "Stop" : "Start"}
        </button>
      </div>
    </section>
  );
}