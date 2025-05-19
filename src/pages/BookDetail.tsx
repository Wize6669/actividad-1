import { useParams, useNavigate } from "react-router";
import { booksTable, authorsTable, booksGenreTable } from "../db";
import Header from "../components/ui/Header";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const book = booksTable.find(b => b.id === Number(id));

  if (!book) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>📚 Libro no encontrado</h2>
      </>
    );
  }

  const authors = book.authorsIds.map(aid => authorsTable.find(a => a.id === aid)?.name).join(', ');
  const genres = book.genresIds.map(gid => booksGenreTable.find(g => g.id === gid)?.name).join(', ');

  return (
    <>
      <Header /> {/* 🔼 Este encabezado ahora se muestra arriba y centrado */}
      <div style={{
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
      }}>
        <img
          src={book.imageUrl}
          alt={book.title}
          style={{
            width: '250px',
            height: '375px',
            objectFit: 'cover',
            borderRadius: '12px',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{book.title}</h1>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}><strong>Autores:</strong> {authors}</p>
          <p style={{ marginBottom: '1rem' }}><strong>Géneros:</strong> {genres}</p>
          <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>{book.description}</p>
          <p><strong>Precio:</strong> ${book.price.toFixed(2)}</p>
          {book.discount > 0 && (
            <p style={{ color: 'green' }}>
              <strong>Descuento:</strong> {Math.round(book.discount * 100)}%
            </p>
          )}
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "1.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Volver a la lista
          </button>
        </div>
      </div>
    </>
  );
}
