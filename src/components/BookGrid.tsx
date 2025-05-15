import BookCard from './BookCard';
import type { Book } from '../models/Book.ts';

interface BookGridProps {
    books: Book[];
    title?: string;
}

export function BookGrid({ books, title }: BookGridProps) {
    return (
        <div className="py-6">
            {title && (
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                    <div key={book.id}>
                        <BookCard {...book} />
                    </div>
                ))}
            </div>
        </div>
    );
}