export interface Picture {
  id: string;
  max_size: string;
  secure_url: string;
}

export interface Detail {
  pictures: Picture[];
  plain_text: string;
  condition: string;
  title: string;
  currency_id: string;
  price: number;
}
