import type { User } from './models/User.ts';
import type { Role } from "./models/Role.ts";
import type { Author } from "./models/Author.ts";
import type { BookGenre } from "./models/BookGenre.ts";
import type { Book } from "./models/Book.ts";

const usersTable: User[] = [];

const rolesTable: Role[] = [
    { id: 1, role: "admin" },
    { id: 2, role: "client" },
];

const booksGenreTable: BookGenre[] = [
    { id: 1, name: "Ficción" },
    { id: 2, name: "Romance" },
    { id: 3, name: "Realismo Mágico" },
    { id: 4, name: "Ficción Clásica" },
    { id: 5, name: "Ficción Contemporánea" },
    { id: 6, name: "Ficción Literaria" },
    { id: 7, name: "Estudios de Género" },
    { id: 8, name: "Terror" },
    { id: 9, name: "Suspense" },
    { id: 10, name: "Ciencia Ficción" },
    { id: 11, name: "Fantasía" },
    { id: 12, name: "Misterio" },
    { id: 13, name: "Novela Histórica" },
    { id: 14, name: "Poesía" },
    { id: 15, name: "Drama" },
];

const authorsTable: Author[] = [
    {
        id: 1,
        name: "Gabriel",
        surname: "García Márquez",
        email: "gabo@ejemplo.com",
        bio: "Escritor colombiano, Premio Nobel de Literatura, conocido por su realismo mágico.",
        genresIds: [1, 3]
    },
    {
        id: 2,
        name: "Jane",
        surname: "Austen",
        email: "jane.austen@ejemplo.com",
        bio: "Novelista inglesa cuyas obras exploran las vidas de mujeres de la nobleza rural.",
        genresIds: [2, 4]
    },
    {
        id: 3,
        name: "Haruki",
        surname: "Murakami",
        email: "haruki.m@ejemplo.com",
        bio: "Escritor japonés conocido por su surrealismo y temas de soledad y alienación.",
        genresIds: [1, 5]
    },
    {
        id: 4,
        name: "Chimamanda",
        surname: "Ngozi Adichie",
        email: "chimamanda@ejemplo.com",
        bio: "Escritora nigeriana cuyas obras abordan temas de género, raza y colonialismo.",
        genresIds: [6, 7]
    },
    {
        id: 5,
        name: "Stephen",
        surname: "King",
        email: "stephen.k@ejemplo.com",
        bio: "Autor estadounidense prolífico en el género de terror, suspense y ciencia ficción.",
        genresIds: [8, 9]
    }
];

const booksTable: Book[] = [
    {
        id: 1,
        title: "Cien años de soledad",
        authorsIds: [1],
        description: "La épica historia de la familia Buendía a lo largo de siete generaciones en el mítico pueblo de Macondo.",
        imageUrl: "https://picsum.photos/id/237/200/300",
        genresIds: [1, 3],
        price: 25.99,
        discount: 0.15
    },
    {
        id: 2,
        title: "Orgullo y prejuicio",
        authorsIds: [2],
        description: "Una novela clásica sobre las relaciones sociales y el matrimonio en la Inglaterra del siglo XIX.",
        imageUrl: "https://picsum.photos/id/2/200/300",
        genresIds: [2, 4],
        price: 19.50,
        discount: 0
    },
    {
        id: 3,
        title: "Tokio Blues (Norwegian Wood)",
        authorsIds: [3],
        description: "Una nostálgica historia de amor y pérdida ambientada en el Japón de finales de los años sesenta.",
        imageUrl: "https://picsum.photos/id/3/200/300",
        genresIds: [1, 5],
        price: 22.75,
        discount: 0.10
    },
    {
        id: 4,
        title: "Medio sol amarillo",
        authorsIds: [4],
        description: "Una poderosa novela sobre la guerra civil nigeriana contada a través de las vidas de tres personajes.",
        imageUrl: "https://picsum.photos/id/4/200/300",
        genresIds: [6, 7, 13],
        price: 28.00,
        discount: 0
    },
    {
        id: 5,
        title: "El resplandor",
        authorsIds: [5],
        description: "Una escalofriante historia sobre un hotel aislado y los oscuros secretos que alberga.",
        imageUrl: "https://picsum.photos/id/5/200/300",
        genresIds: [8, 17],
        price: 18.99,
        discount: 0.20
    },
    {
        id: 6,
        title: "1984",
        authorsIds: [1],
        description: "Una distopía clásica sobre un régimen totalitario y la lucha contra la opresión.",
        imageUrl: "https://picsum.photos/id/237/6/300",
        genresIds: [1, 10],
        price: 15.50,
        discount: 0
    },
    {
        id: 7,
        title: "Harry Potter y la piedra filosofal",
        authorsIds: [2],
        description: "El inicio de la mágica aventura de un joven mago en el Colegio Hogwarts de Magia y Hechicería.",
        imageUrl: "https://picsum.photos/id/7/200/300",
        genresIds: [1, 11],
        price: 21.20,
        discount: 0.05
    },
    {
        id: 8,
        title: "El código Da Vinci",
        authorsIds: [3],
        description: "Un thriller de misterio que involucra símbolos religiosos y sociedades secretas.",
        imageUrl: "https://picsum.photos/id/8/200/300",
        genresIds: [12, 17],
        price: 24.00,
        discount: 0
    },
    {
        id: 9,
        title: "Los pilares de la Tierra",
        authorsIds: [4],
        description: "Una épica novela histórica ambientada en la Inglaterra del siglo XII durante la construcción de una catedral.",
        imageUrl: "https://picsum.photos/id/9/200/300",
        genresIds: [13],
        price: 29.95,
        discount: 0.12
    },
    {
        id: 10,
        title: "Veinte poemas de amor y una canción desesperada",
        authorsIds: [5],
        description: "Una colección de poemas de amor de uno de los poetas más influyentes del siglo XX.",
        imageUrl: "https://picsum.photos/id/10/200/300",
        genresIds: [14],
        price: 12.75,
        discount: 0
    },
    {
        id: 11,
        title: "Hamlet",
        authorsIds: [5],
        description: "Un drama trágico sobre la venganza, la locura y la moralidad.",
        imageUrl: "https://picsum.photos/id/11/200/300",
        genresIds: [15],
        price: 16.30,
        discount: 0.08
    },
    {
        id: 12,
        title: "Don Quijote de la Mancha",
        authorsIds: [4],
        description: "Una obra cumbre de la literatura española que narra las aventuras de un hidalgo que se cree caballero.",
        imageUrl: "https://picsum.photos/id/12/200/300",
        genresIds: [4, 16],
        price: 27.50,
        discount: 0
    },
    {
        id: 13,
        title: "Perdida",
        authorsIds: [3],
        description: "Un thriller psicológico lleno de giros inesperados sobre un matrimonio en crisis.",
        imageUrl: "https://picsum.photos/id/13/200/300",
        genresIds: [17, 12],
        price: 20.99,
        discount: 0.18
    },
    {
        id: 14,
        title: "La Odisea",
        authorsIds: [2],
        description: "Un poema épico griego que narra el largo viaje de regreso a casa de Odiseo.",
        imageUrl: "https://picsum.photos/id/14/200/300",
        genresIds: [1, 18],
        price: 17.80,
        discount: 0
    },
    {
        id: 15,
        title: "Steve Jobs",
        authorsIds: [1],
        description: "Una biografía autorizada del cofundador de Apple, Steve Jobs.",
        imageUrl: "https://picsum.photos/id/15/200/300",
        genresIds: [19],
        price: 26.50,
        discount: 0.05
    },
    {
        id: 16,
        title: "El diario de Ana Frank",
        authorsIds: [1, 2],
        description: "El conmovedor relato de una joven judía escondida durante la Segunda Guerra Mundial.",
        imageUrl: "https://picsum.photos/id/16/200/300",
        genresIds: [20, 13],
        price: 14.20,
        discount: 0
    },
    {
        id: 17,
        title: "Sapiens: De animales a dioses",
        authorsIds: [3, 5],
        description: "Una exploración de la historia de la humanidad desde sus inicios hasta el presente.",
        imageUrl: "https://picsum.photos/id/17/200/300",
        genresIds: [22, 24],
        price: 23.15,
        discount: 0.10
    },
    {
        id: 18,
        title: "Cosmos",
        authorsIds: [2, 1],
        description: "Una divulgación científica sobre la exploración del universo.",
        imageUrl: "https://picsum.photos/id/18/200/300",
        genresIds: [23],
        price: 19.99,
        discount: 0
    },
    {
        id: 19,
        title: "El alquimista",
        authorsIds: [1],
        description: "Una fábula sobre la búsqueda de los sueños y el destino.",
        imageUrl: "https://picsum.photos/id/19/200/300",
        genresIds: [1, 24],
        price: 17.40,
        discount: 0.15
    },
    {
        id: 20,
        title: "Hábitos atómicos",
        authorsIds: [3],
        description: "Una guía práctica para construir buenos hábitos y romper los malos.",
        imageUrl: "https://picsum.photos/id/20/200/300",
        genresIds: [25],
        price: 22.00,
        discount: 0
    }
];

export { usersTable, rolesTable, authorsTable, booksGenreTable, booksTable };