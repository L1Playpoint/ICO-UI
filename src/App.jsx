/**
 * @components Custom main components
 */
import Home from "./Pages/Home";
import React from "react";

import "reactjs-popup/dist/index.css";

function App() {
  const [lightMode, setLightMode] = React.useState(false);

  const handleLightMode = () => {
    setLightMode((prev) => !prev);
  };
  console.log(lightMode)

  React.useEffect(() => {
    lightMode
      ? (document.body.style.background === "white" &&
        document.body.style.color === "black")
      : (document.body.style.background === "black" &&
        document.body.style.color === "white")

  }, [lightMode]);
  console.log(document.body.style);

  return (
    <div className={`app__container ${lightMode ? "lightMode" : "darkMode"}`}>
      <Home
        lightMode={lightMode}
        setLightMode={setLightMode}
        handleLightMode={handleLightMode}
      />
    </div>
  );
}

export default App;
