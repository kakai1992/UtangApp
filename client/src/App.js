import React, { useEffect, useState } from "react";

const App = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>⚡ MERN + Webpack Setup</h1>
      <p>Server says: {msg}</p>
    </div>
  );
};

export default App;
