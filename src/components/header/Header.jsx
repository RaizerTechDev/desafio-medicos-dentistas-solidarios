import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/nav/coracao.png";
import S from "./header.module.scss";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id='header' className={S.header}>
       <Link to="/" title="Voltar para a Home">
      <div className={S.boxLogo}>
        
         <img src={Logo} alt="Logo — coração verde" />
        <h2 >Medicos & Dentistas</h2>
             
      </div>
       </Link>  

      {/* NAV DESKTOP */}
      <nav className={S.nav}>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntário</Link>
      </nav>

      {/* BOTÃO HAMBURGER */}
      <button
        className={`${S["mobile-toggle-btn"]} ${menuOpen ? S.open : ""}`}
        onClick={toggleMenu}
      >
        {/* Ícone simples */}
        <span style={{ fontSize: "2rem" }}><Menu size={24} />{" "}</span>
      </button>

      {/* MENU MOBILE */}
      <div className={`${S["mobile-menu"]} ${menuOpen ? S.show : ""}`}>
        <nav>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/voluntario" onClick={toggleMenu}>Seja Voluntário</Link>
        </nav>
      </div>
    </header>
  );
}
