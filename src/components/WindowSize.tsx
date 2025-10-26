import { useEffect, useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState({w: window.innerWidth, h: window.innerHeight});

  useEffect(() => {
    const onReSize = () => setSize({w: window.innerWidth, h: window.innerHeight});
    window.addEventListener("resize", onReSize);
    return () => window.removeEventListener("resize", onReSize);
  }, []);

  return (
    <section style={{ height: "100%", width: "auto", padding: "20px"}}>
      <h2 style={{ paddingBottom: "20px"}}>Window Size effect with cleanup</h2>
      <p><strong>{size.w}</strong> x <strong>{size.h}</strong></p>
    </section>
  );
}