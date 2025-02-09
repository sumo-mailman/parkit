export interface Listing {
  id: number;
  address: string;
  pricePerDay: number;
  image: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
  owner: {
    id: string;
    name: string | null;
    email: string;
  };
}
