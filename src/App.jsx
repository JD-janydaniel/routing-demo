import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Topbar from "./Topbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
