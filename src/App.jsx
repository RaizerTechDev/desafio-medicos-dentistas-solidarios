import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import SejaVoluntario from "./pages/sejaVoluntario/SejaVoluntario";

import "./globalStyle.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voluntario" element={<SejaVoluntario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}