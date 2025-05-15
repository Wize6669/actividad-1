export interface Book {
    id: number;
    title: string;
    authorsIds: number[];
    description: string;
    imageUrl: string;
    genresIds: number[];
    price: number;
    discount: number;
}