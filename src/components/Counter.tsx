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
    if (isFirst.current) {isFirst.current = false; return;}
  }, [count]);

  return (
    <section>
      <h2>Counter</h2>
      <div>
        <button aria-label="Decrease Count" onClick={() => {setCount(c => c - 1)}}>Decrease</button>
        <output>{count}</output>
        <button aria-label="Increase Count" onClick={() => {setCount(c => c + 1)}}>Increase</button>
        <button aria-label="Reset Count" onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}
