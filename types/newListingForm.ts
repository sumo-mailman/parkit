export interface NewListingForm {
  address: string;
  pricePerDay: number;
  image: string;
  available: boolean;
  ownerId?: string;
}
