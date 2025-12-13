import S from "./footer.module.scss";
import Logo from "../../assets/nav/coracao.png";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react"; // Apenas ícones de contato mantidos

export default function Footer() {
  return (
    <footer className={S.footer} id="footer">
      
      <div className={`${S.container} ${S.footer__container}`}>

        {/* COLUNA 1 — Marca */}
        <div className={`${S.footer__col} ${S.footer__brand}`}>
          <div className={S.logoContainer}>
            <img src={Logo} alt="Logo" />
            <h2 className={S.logoFooter}>Médicos & Dentistas</h2>
          </div>
          <p className={S.brandText}>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        {/* COLUNA 2 — Contatos Rápidos */}
        <div className={S.footer__col}>
          <h4>Contato</h4>
          <ul className={S.footer__links}>
            <li>
              <Mail size={18} />
              <a href="mailto:rafael.dev.raizer@gmail.com">rafael.dev.raizer@gmail.com</a>
            </li>
            <li>
              <Phone size={18} />
              <a href="https://api.whatsapp.com/send/?phone=47999327137" target="_blank" rel="external">(47) 99932-7137</a>
            </li>          
            <li>
              <MapPin size={18} />
              <a href="https://www.google.com/maps" target="_blank" rel="external">Gaspar, Brasil</a>
            </li>
          </ul>
        </div>  

        {/* COLUNA 3 — Redes Sociais (APENAS TEXTO) */}
        <div className={`${S.footer__col} ${S.socialCol}`}>
          <h4>Redes Sociais</h4>         
          
          <ul className={S.socialList}>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raizer-rafael" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={S.footer__bottom}>
        <div className={`${S.container} ${S.footer__copyright}`}>
          <p>
            &copy; <span>2025 Médicos e Dentistas</span> pela Comunidade. Todos os direitos reservados.
          </p>

         <a 
  href="#" // Mantém o comportamento de link (cursor pointer)
  className={S.btnScrollTop} 
  title="Voltar ao topo"
  onClick={(e) => {
    e.preventDefault(); // Evita que o # apareça na URL
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Faz a subida ser suave (animada)
    });
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="#f9f0f0" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M8 6L12 2L16 6" />
    <path d="M12 2V22" />
  </svg>
</a>
        </div>
      </div>
    </footer>
  );
}