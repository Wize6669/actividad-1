import type { FC } from 'react';
import { useCartStore } from '../stores/cartStore.ts';
import type { CartItem } from '../models/CartItem.ts';

interface CartProps {
  onClose: () => void;
}

const Cart: FC<CartProps> = ({ onClose }) => {
  const { items, removeFromCart, clearCart, totalPrice } = useCartStore();

  const handleCheckout = () => {
    alert('Gracias por tu compra! Regrese Pronto');
    clearCart();
    onClose();
  };

  return (
    <div className="p-4 flex flex-col h-full bg-theme shadow rounded-md max-w-sm w-full text-theme">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Carrito de compras</h2>
        <button
          onClick={onClose}
          className="hover:text-primary font-bold text-xl"
          aria-label="Cerrar carrito"
          style={{ color: "var(--color-text)" }}
        >
          ×
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="flex-grow overflow-auto space-y-4">
            {items.map((item: CartItem) => {
              const priceWithDiscount = item.discount ? item.price * (1 - item.discount) : item.price;
              return (
                <li key={item.id} className="flex justify-between items-center border-b border-theme pb-2">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${priceWithDiscount.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="hover:text-red-600 font-semibold"
                    aria-label={`Eliminar ${item.title} del carrito`}
                    style={{ color: "var(--color-primary)" }}
                  >
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 border-t border-theme pt-4">
            <p className="text-lg font-bold">Total: ${totalPrice().toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-3 w-full bg-primary text-white py-2 rounded hover:bg-primary/80 transition"
            >
              Proceder al pago
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
