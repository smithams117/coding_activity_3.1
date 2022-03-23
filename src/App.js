import "./styles.css";
import { useState } from "react";

export default function App() {
  const [initializes, setInitialize] = useState({
    initialize: false
  });

  const handler = () => {
    setInitialize({
      initialize: true
    });
  };

  if (initializes.initialize) {
    return <h1>I liked You </h1>;
  } else {
    return <button onClick={handler}>Click The Button</button>;
  }
}
