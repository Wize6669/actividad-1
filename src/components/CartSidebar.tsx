import type { FC } from 'react';
import Cart from './Cart.tsx';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      onClick={onClose} // click fuera cierra
    >
      <div
        className="w-80 h-full bg-theme shadow-lg p-4 text-theme border-2 border-theme"
        onClick={(e) => e.stopPropagation()} // evita cierre si click dentro
      >
        <Cart onClose={onClose} />
      </div>
    </div>
  );
};

export default CartSidebar;
