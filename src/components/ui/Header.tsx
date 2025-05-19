// import { type FormEvent, useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { User, ShoppingCart, Search, Sun, Moon } from 'lucide-react'; // agrego Sun y Moon para iconos
// import { useCartStore } from '../../stores/cartStore.ts';
// import { userStoreClient } from "../../stores/userStore.ts";
// import { useTheme } from '../../hooks/useTheme';  // <-- importamos hook para modo oscuro

// export default function Header({ onCartClick }: { onCartClick: () => void }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const userStore = userStoreClient((state) => state);
//   const navigate = useNavigate();

//   const totalItems = useCartStore(state => 
//     state.items.reduce((sum, item) => sum + item.quantity, 0)
//   );

//   const { darkMode, toggleDarkMode } = useTheme();  // <-- usamos hook

//   const handleSearch = (e: FormEvent) => {
//     e.preventDefault();
//     navigate(`/books?search=${searchTerm}`);
//   };

//   return (
//     <header className={`bg-white shadow-md ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//         <Link to="/" className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
//           Librería Relatos de Papel
//         </Link>

//         {/* Mobile */}
//         <button
//           className={`sm:hidden focus:outline-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"/>
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"/>
//             )}
//           </svg>
//         </button>

//         <nav className={`sm:flex gap-4 ${isOpen ? 'block' : 'hidden'} absolute sm:static top-16 left-0 w-full sm:w-auto 
//           ${darkMode ? 'bg-gray-800' : 'bg-white'} sm:bg-transparent sm:shadow-none shadow-md`}>
//           <Link to="/" className={`block px-4 py-2 hover:text-blue-600 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}`}>Inicio</Link>
//           <Link to="/about" className={`block px-4 py-2 hover:text-blue-600 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}`}>Sobre nosotros</Link>
//           <Link to="/contacts" className={`block px-4 py-2 hover:text-blue-600 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}`}>Contactos</Link>
//         </nav>

//         <div className="flex items-center gap-4 text-sm" style={{ color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(75,85,99,1)' }}>
//           <form onSubmit={handleSearch} className={`hidden sm:flex items-center border rounded-md px-2 py-1 
//             ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
//             <input
//               type="text"
//               placeholder="Buscar libros..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={`outline-none text-sm w-40 bg-transparent ${darkMode ? 'placeholder-gray-400 text-white' : 'placeholder-gray-500 text-black'}`}
//             />
//             <button type="submit">
//               <Search className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}/>
//             </button>
//           </form>

//           {userStore.user.isLogin ? (
//             <span className="hidden sm:inline">
//               Bienvenido, <span className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{userStore.user.name} {userStore.user.surname}</span>
//             </span>
//           ) : (
//             <Link to="/login" className={`flex items-center relative hover:${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
//               <User className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}/>
//               <span className="hidden sm:inline">Iniciar sesión</span>
//             </Link>
//           )}

//           {/* Botón modo oscuro */}
//           <button
//             onClick={toggleDarkMode}
//             aria-label="Toggle Dark Mode"
//             className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
//             style={{ color: darkMode ? 'yellow' : 'gray' }}
//           >
//             {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </button>

//           <button
//             onClick={onCartClick}
//             className={`relative hover:${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
//             aria-label="Abrir carrito de compras"
//           >
//             <ShoppingCart className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
//             {totalItems > 0 && (
//               <span className="absolute -top-1 -right-4 text-s font-bold text-red-600">
//                 {totalItems}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Search mobile */}
//       <form onSubmit={handleSearch} className="sm:hidden px-4 py-2">
//         <div className={`flex items-center border rounded-md px-2 py-1 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
//           <input
//             type="text"
//             placeholder="Buscar libros..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className={`outline-none text-sm w-full bg-transparent ${darkMode ? 'placeholder-gray-400 text-white' : 'placeholder-gray-500 text-black'}`}
//           />
//           <button type="submit">
//             <Search className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
//           </button>
//         </div>
//       </form>
//     </header>
//   );
// }

import { type FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { User, ShoppingCart, Search, Sun, Moon } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import { userStoreClient } from "../../stores/userStore";
import { useTheme } from '../../hooks/useTheme';

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const userStore = userStoreClient((state) => state);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const totalItems = useCartStore(state =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/books?search=${searchTerm}`);
  };

  return (
    <header style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }} className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
          Librería Relatos de Papel
        </Link>

        {/* Botón mobile */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegación */}
        <nav className={`sm:flex gap-4 ${isOpen ? 'block' : 'hidden'} absolute sm:static top-16 left-0 w-full sm:w-auto shadow-md sm:shadow-none bg-[var(--color-bg)]`}>
          <Link to="/" className="block px-4 py-2 hover:text-[var(--color-primary)]">Inicio</Link>
          <Link to="/about" className="block px-4 py-2 hover:text-[var(--color-primary)]">Sobre nosotros</Link>
          <Link to="/contacts" className="block px-4 py-2 hover:text-[var(--color-primary)]">Contactos</Link>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4 text-sm">
          <form onSubmit={handleSearch} className="hidden sm:flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Buscar libros..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none text-sm w-40 bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
              style={{ color: 'var(--color-text)' }}
            />
            <button type="submit">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          </form>

          {userStore.user.isLogin ? (
            <span className="hidden sm:inline">
              Bienvenido, <span className="font-medium text-[var(--color-primary)]">{userStore.user.name} {userStore.user.surname}</span>
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
                <span
                className="absolute -top-1 -right-4 text-xs font-bold"
                style={{ color: 'var(--color-text)' }}
                >
                {totalItems}
                </span>
            )}
          </button>
        </div>
      </div>

      {/* Buscador en mobile */}
      <form onSubmit={handleSearch} className="sm:hidden px-4 py-2">
        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1">
          <input
            type="text"
            placeholder="Buscar libros..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none text-sm w-full bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
            style={{ color: 'var(--color-text)' }}
          />
          <button type="submit">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </form>
    </header>
  );
}
