import { useEffect, useState } from "react";

export default function DocTitle() {
  const [title, setTitle] = useState("React Hook Lab");

  useEffect(() => {
    document.title = title;
    //cleanup not needed here just overwrite on each render
  }, [title]);

  return (
    <section style={{ height: "auto", width: "100%" }}>
      <h2 style={{paddingBottom: '40px'}}>Document Title Sync</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </section>
  )
}