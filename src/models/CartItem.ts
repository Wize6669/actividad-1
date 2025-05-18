export interface CartItem {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    discount?: number;
    quantity: number;
  }