import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(() => {
    const raw = localStorage.getItem("count");
    return raw ? Number(raw) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
  }, [count]);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2 style={{ margin: "20px 0" }}>Counter</h2>
      <div style={{ display: "flex", gap: "3rem", alignItems: "center", flexDirection: 'column' }}>
        <output>{count}</output>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'row'}}>
          <button
            aria-label="Increase Count"
            onClick={() => {
              setCount((c) => c + 1);
            }}
          >
            Increase
          </button>
          <button
            aria-label="Decrease Count"
            onClick={() => {
              setCount((c) => c - 1);
            }}
          >
            Decrease
          </button>
          <button
            aria-label="Reset Count"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
