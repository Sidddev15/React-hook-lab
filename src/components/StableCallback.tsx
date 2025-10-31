import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onClick }: { onClick: () => void }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment in child</button>;
});

export default function StableCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2>Stable Callback Demo</h2>
      <p>Count : {count}</p>
      <Child onClick={increment} />
    </section>
  );
}
