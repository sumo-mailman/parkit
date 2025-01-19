export interface Listing {
  id: number;
  address: string;
  pricePerDay: number;
  image: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
  owner: {
    id: number;
    name: string | null;
    email: string;
  };
}
