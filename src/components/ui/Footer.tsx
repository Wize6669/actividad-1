import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="py-8 mt-12 border-t"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información general */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-[var(--color-primary)]">BookStore</h2>
          <p className="text-sm opacity-80">
            Tu librería en línea favorita. Explora, descubre y disfruta de los mejores libros.
          </p>
          <p className="mt-4 text-xs opacity-60">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--color-primary)]">Enlaces útiles</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/about" className="hover:text-[var(--color-primary)]">Acerca de nosotros</a></li>
            <li><a href="/contact" className="hover:text-[var(--color-primary)]">Contacto</a></li>
            <li><a href="/terms" className="hover:text-[var(--color-primary)]">Términos y condiciones</a></li>
            <li><a href="/privacy" className="hover:text-[var(--color-primary)]">Política de privacidad</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--color-primary)]">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl opacity-80 hover:text-[var(--color-primary)]"><FaFacebookF /></a>
            <a href="#" className="text-xl opacity-80 hover:text-[var(--color-primary)]"><FaInstagram /></a>
            <a href="#" className="text-xl opacity-80 hover:text-[var(--color-primary)]"><FaTwitter /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-xl opacity-80 hover:text-[var(--color-primary)]"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
