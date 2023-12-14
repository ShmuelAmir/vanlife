export type Van = {
  id: number;
  name: string;
  description: string;
  type: "simple" | "luxury" | "rugged";
  price: number;
  imageUrl: string;
};
