import { Route, Routes } from "react-router";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
