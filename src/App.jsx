import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tradutor from "./pages/Tradutor";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import { HoverSliderDemo } from "./pages/Sobre_Equipe";
import Planos from "./pages/Planos";
import Sobre_Projeto from "./pages/Sobre_Projeto";
import Usuario from "./pages/Usuario";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
  const init = () => {
    if (!window.RybenaApi) {
      console.warn("Rybená não carregou.");
      return;
    }
    window.RybenaApi.getInstance().handleLoaded(() => {
      console.log("Rybená carregou!");
    });
  };

  // Se o load já aconteceu, window.RybenaApi pode já existir
  if (window.RybenaApi) {
    init();
  } else {
    // Script ainda carregando — espera pelo elemento <script> específico
    const script = document.querySelector('script[src*="rybena.js"]');
    if (script) {
      script.addEventListener("load", init);
      return () => script.removeEventListener("load", init);
    } else {
      console.warn("Script da Rybená não encontrado no DOM.");
    }
  }
}, []);
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tradutor" element={<Tradutor />} />
        <Route path="/pages/Sobre_Projeto" element={<Sobre_Projeto />} />
        <Route path="/pages/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/pages/Planos" element={<Planos />} />
        <Route path="/pages/Usuario" element={<Usuario />} />
        <Route path="/pages/Sobre_Equipe" element={<HoverSliderDemo />} />
      </Routes>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
