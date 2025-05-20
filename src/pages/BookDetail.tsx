import { useParams, useNavigate } from "react-router";
import { booksTable, authorsTable, booksGenreTable } from "../db";
import Header from "../components/ui/Header";
import "./BookDetail.css"; 

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = booksTable.find(b => b.id === Number(id));

  if (!book) {
    return (
      <>
        <Header onCartClick={() => console.log('prueba')} />
       
        <h2 className="book-detail__not-found">📚 Libro no encontrado</h2>
      </>
    );
  }

  const authors = book.authorsIds.map(aid => authorsTable.find(a => a.id === aid)?.name).join(', ');
  const genres = book.genresIds.map(gid => booksGenreTable.find(g => g.id === gid)?.name).join(', ');

  return (
    <>
      <Header onCartClick={() => console.log('prueba')} />
    
      <div className="book-detail">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="book-detail__image"
        />
        <div className="book-detail__info">
          <h1 className="book-detail__title">{book.title}</h1>
          <p className="book-detail__authors"><strong>Autores:</strong> {authors}</p>
          <p className="book-detail__genres"><strong>Géneros:</strong> {genres}</p>
          <p className="book-detail__description">{book.description}</p>
          <p className="book-detail__price"><strong>Precio:</strong> ${book.price.toFixed(2)}</p>
          {book.discount > 0 && (
            <p className="book-detail__discount">
              <strong>Descuento:</strong> {Math.round(book.discount * 100)}%
            </p>
          )}
          <button
            className="book-detail__back-button"
            onClick={() => navigate("/")}
          >
            Volver a la lista
          </button>
        </div>
      </div>
    </>
  );
}
