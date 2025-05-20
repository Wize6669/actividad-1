import { booksTable } from "../db";
import { Link } from "react-router";
import Header from "../components/ui/Header";

export function BookList() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Libros disponibles</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {booksTable.map(book => (
          <div key={book.id} style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            width: "200px"
          }}>
            <img src={book.imageUrl} alt={book.title} style={{ width: "100%" }} />
            <h3>{book.title}</h3>
            <p>{book.description.slice(0, 80)}...</p>
            <Link to={`/book/${book.id}`}>
              <button style={{ marginTop: "0.5rem" }}>Ver más</button>
            </Link>
          </div>
        ))}
      </div>
      <div>
      <Header onCartClick={()=>{console.log('prueba')}} />
      <div style={{ padding: "2rem" }}>
        <h2>Libros disponibles</h2>
        {/* Lista de libros... */}
      </div>
    </div>
    </div>
  );
}