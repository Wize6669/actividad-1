import { useState } from 'react';
import { Outlet } from 'react-router';
import Header from "../components/ui/Header.tsx";
import Footer from "../components/ui/Footer.tsx";
import CartSidebar from '../components/CartSidebar.tsx';
import { useTheme } from '../hooks/useTheme';

export default function MainLayout() {
  const [showCart, setShowCart] = useState(false);
  const { darkMode } = useTheme(); 

  const handleCartOpen = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  return (
    <>
      <div className={darkMode ? 'dark-mode' : ''}>
        <Header onCartClick={handleCartOpen} />
        <CartSidebar isOpen={showCart} onClose={handleCartClose} />  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
