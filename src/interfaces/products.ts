import {Product} from './product';

export interface Listitems {
  author: {
    name: string;
    lastname: string;
  };
  categories: Array<string>;
  items: Product;
}
