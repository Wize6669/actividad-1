import { type FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { User, ShoppingCart, Search, Sun, Moon, X } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import { userStoreClient } from '../../stores/userStore';
import { useTheme } from '../../hooks/useTheme';
import debounce from 'lodash/debounce';

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const userStore = userStoreClient((state) => state);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    const debounced = debounce((query: string) => {
      navigate(`/books?search=${encodeURIComponent(query)}`);
    }, 600);

    if (searchTerm.trim() !== '') {
      debounced(searchTerm);
    }

    return () => debounced.cancel();
  }, [searchTerm, navigate]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/books?search=${encodeURIComponent(searchTerm)}`);
  };

  const clearSearch = () => {
    setSearchTerm('');
    navigate(`/`);
  };

  return (
    <header
      style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}
      className="shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
          Librería Relatos de Papel
        </Link>

        {/* Botón mobile */}
        <button className="sm:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegación */}
        <nav
          className={`sm:flex gap-4 ${isOpen ? 'block' : 'hidden'} absolute sm:static top-16 left-0 w-full sm:w-auto shadow-md sm:shadow-none bg-[var(--color-bg)]`}
        >
          <Link to="/" className="block px-4 py-2 hover:text-[var(--color-primary)]">Inicio</Link>
          <Link to="/about" className="block px-4 py-2 hover:text-[var(--color-primary)]">Sobre nosotros</Link>
          <Link to="/contacts" className="block px-4 py-2 hover:text-[var(--color-primary)]">Contactos</Link>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4 text-sm">
          {/* Búsqueda desktop */}
          <form onSubmit={handleSearch} className="hidden sm:flex items-center border rounded-md px-2 py-1 border-gray-300 dark:border-gray-600">
            <input
              type="text"
              placeholder="Buscar libros..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none text-sm w-40 bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
              style={{ color: 'var(--color-text)' }}
            />
            {searchTerm && (
              <button type="button" onClick={clearSearch} className="ml-1">
                <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            )}
            <button type="submit">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          </form>

          {/* Usuario */}
          {userStore.user.isLogin ? (
            <span className="hidden sm:inline">
              Bienvenido,{' '}
              <span className="font-medium text-[var(--color-primary)]">
                {userStore.user.name} {userStore.user.surname}
              </span>
            </span>
          ) : (
            <Link to="/login" className="flex items-center hover:text-[var(--color-primary)]">
              <User className="w-5 h-5 mr-1 text-gray-600 dark:text-gray-300" />
              <span className="hidden sm:inline">Iniciar sesión</span>
            </Link>
          )}

          {/* Modo oscuro */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            style={{ color: darkMode ? 'yellow' : 'gray' }}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Carrito */}
          <button
            onClick={onCartClick}
            className="relative hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Abrir carrito de compras"
          >
            <ShoppingCart className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-4 text-xs font-bold" style={{ color: 'var(--color-text)' }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Buscador en mobile */}
      <form onSubmit={handleSearch} className="sm:hidden px-4 py-2">
        <div className="flex items-center border rounded-md px-2 py-1 border-gray-300 dark:border-gray-600">
          <input
            type="text"
            placeholder="Buscar libros..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none text-sm w-full bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
            style={{ color: 'var(--color-text)' }}
          />
          {searchTerm && (
            <button type="button" onClick={clearSearch} className="ml-1">
              <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          )}
          <button type="submit">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </form>
    </header>
  );
}