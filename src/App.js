import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/FeaturedProducts" element={<FeaturedProducts/>} />
        <Route path="/collections/women" element={<h1>Women's Collection</h1>} />
        <Route path="/collections/men" element={<h1>Men's Collection</h1>} />
        <Route path="/collections/all" element={<h1>All Collections</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
