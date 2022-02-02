/**
 * @packages yarn registry packages
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * @components Custom main components
 */
import Home from "./Pages/Home";
import Whitepaper from "./Pages/Whitepaper";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/whitepaper" element={<Whitepaper />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
