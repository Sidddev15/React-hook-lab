import { useEffect, useRef, useState } from "react";

export default function RenderCount() {
  const [value, setValue] = useState("");
  const renders = useRef(0);
  const [show, setShow] = useState(false);
  const renderDiv = useRef<HTMLDivElement | null>(null);

  // count renders
  renders.current += 1;

  // show render count in div after first render
  useEffect(() => {
    if (renders.current > 1) {
      setShow(true);
    }
    if (renderDiv.current) {
      renderDiv.current.textContent = `Rendered ${renders.current} times`;
    }
  }, [value]);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2>Render Count</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type to trigger renders"
      />
      <p
        style={{
          maxWidth: "300px",
          overflow: "hidden",
          margin: "0 auto",
          width: "100%",
        }}
      >
        Value: {value}
      </p>
      <div
        ref={renderDiv}
        style={{ marginTop: "1rem", color: "blue", fontWeight: "bold" }}
      >
        {show ? `Rendered ${renders.current} times` : ""}
      </div>
    </section>
  );
}
