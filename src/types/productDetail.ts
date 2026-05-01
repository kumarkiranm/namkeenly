export interface SellerInfo {
  id: string;
  name: string;
  location: string;
  /** Short bio */
  bio: string;
  established?: string;
  shopHref?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title?: string;
  body: string;
  verified?: boolean;
}

export interface ProductDetail {
  slug: string;
  name: string;
  region: string;
  price: string;
  priceNote?: string;
  imageLabel: string;
  story: string[];
  ingredients: string[];
  shelfLife: string;
  seller: SellerInfo;
  reviews: ProductReview[];
}
