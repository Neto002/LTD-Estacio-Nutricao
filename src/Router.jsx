import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CalendarioColorido from "./pages/CalendarioColorido";
import Dados from "./pages/Dados";
import DezPassos from "./pages/DezPassos";
import PratoSaudavel from "./pages/PratoSaudavel";

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
        <Route path="/dados" element={<Dados />} />
        <Route path="/calendario-colorido" element={<CalendarioColorido />} />
        <Route path="/dez-passos" element={<DezPassos />} />
        <Route path="/prato-saudavel" element={<PratoSaudavel />} />
      </Routes>
      <Footer />
    </>
  );
}
