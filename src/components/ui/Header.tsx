import { useState } from 'react';
import { Link } from 'react-router';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <Link to="/" className="text-xl font-bold text-blue-600">Librería Relatos de Papel</Link>

                {/* Hamburger */}
                <button
                    className="sm:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>

                <nav className={`sm:flex gap-4 ${isOpen ? 'block' :
                    'hidden'} absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent sm:shadow-none shadow-md`}>
                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Inicio</Link>
                    <Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Sobre
                        nosotros</Link>
                    <Link to="/contacts" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Contactos</Link>
                </nav>

                <div className="hidden sm:block text-sm text-gray-600">
                    Bienvenido, <span className="font-medium text-blue-600">William Zapata</span>
                </div>
            </div>
        </header>
    );
}
