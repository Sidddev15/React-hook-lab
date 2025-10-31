import { useMemo, useState } from "react";

function slowSort(arr: number[]) {
  console.log("Sorting (memoized)...");
  const copy = [...arr];
  copy.sort((a, b) => a - b);
  return copy;
}

export default function MemoizedList() {
  const [numbers] = useState(() =>
    Array.from({ length: 5000 }, () => Math.random())
  );
  const [toggle, setToggle] = useState(false);

  //   Using Memo
  const sorted = useMemo(() => slowSort(numbers), [numbers]);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2>Memoized Expensive List</h2>
      <button onClick={() => setToggle((t) => !t)}>
        Toggle ({String(toggle)})
      </button>
      <p>
        First 3 numbers:{" "}
        {sorted
          .slice(0, 3)
          .map((n) => n.toFixed(2))
          .join(", ")}
      </p>
    </section>
  );
}
