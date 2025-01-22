import { Route, Routes } from "react-router";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
