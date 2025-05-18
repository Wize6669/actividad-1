import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Información general */}
                <div>
                    <h2 className="text-xl font-bold mb-2">BookStore</h2>
                    <p className="text-gray-400 text-sm">
                        Tu librería en línea favorita. Explora, descubre y disfruta de los mejores libros.
                    </p>
                    <p className="mt-4 text-gray-500 text-xs">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>

                {/* Navegación */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Enlaces útiles</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="/about" className="hover:text-white">Acerca de nosotros</a></li>
                        <li><a href="/contact" className="hover:text-white">Contacto</a></li>
                        <li><a href="/terms" className="hover:text-white">Términos y condiciones</a></li>
                        <li><a href="/privacy" className="hover:text-white">Política de privacidad</a></li>
                    </ul>
                </div>

                {/* Redes sociales */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
                        <a href="https://github.com/" target="_blank" className="text-gray-400 hover:text-white text-xl"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
