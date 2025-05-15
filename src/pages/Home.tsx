import { useEffect, useState } from 'react';
import type { Book } from '../models/Book.ts';
import { booksTable } from '../db.ts';
import { BookGrid } from '../components/BookGrid.tsx';

export default function Home() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setBooks(booksTable);
    }, []);

    return (
        <div className={"flex items-center justify-between gap-4"}>
            <BookGrid books={books} title={"Libros más vendidos"}/>
        </div>
    );
}