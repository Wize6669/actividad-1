import { useParams, useNavigate } from "react-router-dom";
import { booksTable, authorsTable, booksGenreTable } from "../db";

export function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = booksTable.find(b => b.id === Number(id));

  if (!book) {
    return <div>Libro no encontrado</div>;
  }

  const authorNames = book.authorsIds
    .map(authorId => authorsTable.find(a => a.id === authorId)?.name)
    .filter(Boolean)
    .join(", ");

  const genreNames = book.genresIds
    .map(genreId => booksGenreTable.find(g => g.id === genreId)?.name)
    .filter(Boolean)
    .join(", ");

  const discountedPrice = (book.price * (1 - book.discount)).toFixed(2);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{book.title}</h1>
      <img src={book.imageUrl} alt={book.title} style={{ width: "200px" }} />
      <p><strong>Autor:</strong> {authorNames}</p>
      <p><strong>Géneros:</strong> {genreNames}</p>
      <p><strong>Descripción:</strong> {book.description}</p>
      <p><strong>Precio:</strong> ${discountedPrice}</p>

      <button onClick={() => navigate("/")} style={{ marginTop: "1rem" }}>
        Volver a la lista
      </button>
    </div>
  );
}