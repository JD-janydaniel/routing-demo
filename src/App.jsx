import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Topbar from "./Topbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Blog from "./Blog";
import Politics from "./Politics";
import Sports from "./Sports";
import Fashion from "./Fashion";
import Business from "./Business";
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
          <Route path="/blog" element={<Blog />}>
            <Route path="politics" element={<Politics />}></Route>
            <Route path="sports" element={<Sports />}></Route>
            <Route path="fashion" element={<Fashion />}></Route>
            <Route path="business" element={<Business />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
