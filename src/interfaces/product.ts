export interface Product {
  id: string;
  title: string;
  price: number;
  available_quantity: number;
  thumbnail: string;
  condition: string;
  currency_id: string;
  shipping: {
    free_shipping: boolean;
  };
}
