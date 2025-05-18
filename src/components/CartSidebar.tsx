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
        className="w-80 h-full bg-white shadow-lg p-4"
        onClick={(e) => e.stopPropagation()} // evita cierre si click dentro
      >
        <Cart onClose={onClose} />
      </div>
    </div>
  );
};

export default CartSidebar;
