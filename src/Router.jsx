import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function Router() {
  return (
    <>
      <Carousel />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}
