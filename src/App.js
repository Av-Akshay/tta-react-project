import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/header/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
