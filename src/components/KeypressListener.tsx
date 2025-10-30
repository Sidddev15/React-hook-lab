import { useEffect, useState } from "react";

export default function KeyPressListener() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      setLastKey(e.key);
    };
    window.addEventListener("keypress", onKey);

    return () => {
      window.removeEventListener("keypress", onKey);
    }
  }, []);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2>Keyboard Event Listener</h2>
      <p>Press any key -- Last: <strong>{lastKey || "none"}</strong> </p>
    </section>
  );
}