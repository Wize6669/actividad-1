/* import { Link } from 'react-router';
import type { Book } from '../models/Book.ts';

export default function BookCard({ id, title, imageUrl, price, discount }: Book) {
    return (
        <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    {discount !== undefined && discount > 0 ? (
                        <div className="flex items-center">
                            <span className="text-gray-500 line-through">${price.toFixed(2)}</span>
                            <span className="ml-2 text-red-600 font-bold">${(price * (1 - discount)).toFixed(2)}</span>
                        </div>
                    ) : (
                        <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
                    )}
                </div>

                <div className="mt-4 flex justify-between space-x-2">
                    <button
                        className="w-1/2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition text-sm">
                        Agregar al carrito
                    </button>
                    <Link
                        to={`/books/${id}`}
                        className="w-1/2 bg-gray-200 text-gray-700 text-center py-1 px-2 rounded hover:bg-gray-300 transition text-sm"
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
}
 */


import { Link } from 'react-router';
import type { Book } from '../models/Book.ts';
import { useCartStore } from '../stores/cartStore.ts';

export default function BookCard({ id, title, imageUrl, price, discount }: Book) {
    const addToCart = useCartStore(state => state.addToCart);

    const handleAddToCart = () => {
        addToCart({
            id,
            title,
            price,
            discount,
            quantity: 1,
            imageUrl,
        });
    };

    return (
        <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    {discount !== undefined && discount > 0 ? (
                        <div className="flex items-center">
                            <span className="text-gray-500 line-through">${price.toFixed(2)}</span>
                            <span className="ml-2 text-red-600 font-bold">${(price * (1 - discount)).toFixed(2)}</span>
                        </div>
                    ) : (
                        <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
                    )}
                </div>

                <div className="mt-4 flex justify-between space-x-2">
                    <button
                        onClick={handleAddToCart}
                        className="w-1/2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition text-sm"
                    >
                        Agregar al carrito
                    </button>
                    <Link
                        to={`/book/${id}`}
                        className="w-1/2 bg-gray-200 text-gray-700 text-center py-1 px-2 rounded hover:bg-gray-300 transition text-sm"
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
}
