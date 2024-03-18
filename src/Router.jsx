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
        <Route exact path="/" element={<Main />} />
        <Route path="/ltd-estacio-nutricao/about" element={<About />} />
        <Route path="/ltd-estacio-nutricao/signin" element={<Signin />} />
        <Route path="/ltd-estacio-nutricao/signup" element={<Signup />} />
        <Route path="/ltd-estacio-nutricao/dados" element={<Dados />} />
        <Route
          path="/ltd-estacio-nutricao/calendario-colorido"
          element={<CalendarioColorido />}
        />
        <Route
          path="/ltd-estacio-nutricao/dez-passos"
          element={<DezPassos />}
        />
        <Route
          path="/ltd-estacio-nutricao/prato-saudavel"
          element={<PratoSaudavel />}
        />
      </Routes>
      <Footer />
    </>
  );
}
