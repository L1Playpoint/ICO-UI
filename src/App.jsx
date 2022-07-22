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
