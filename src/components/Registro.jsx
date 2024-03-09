import { Formulario } from "./Formulario";
import { SocialButton } from "./SocialButton";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const egistro = () => {
  return (
    <div className="contenedor-principal">
      <main>
        <h1>Crea una cuenta</h1>
        {/* Pasa diferentes iconos como propiedades */}
        <section className="contenedor-iconos">
            <SocialButton icon={faFacebook} />
            <SocialButton icon={faGithub} />
            <SocialButton icon={faLinkedin} />
        </section>
        <p>O usa tu email para registrarte</p>
        <Formulario />
      </main>
    </div>
  );
};