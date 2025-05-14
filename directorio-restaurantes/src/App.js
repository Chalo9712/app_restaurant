import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Search from "./pages/search";
import NewRestaurant from "./pages/newrestaurant";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/nuevo" element={<NewRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
