import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2>Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Click here to focus" />
      <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Focus
      </button>
    </section>
  );
}
