export const sellerStats = {
  revenue30d: "₹1,24,500",
  orders30d: 142,
  activeListings: 18,
  pendingOrders: 6,
} as const;

export type ProductRow = {
  id: string;
  name: string;
  region: string;
  price: string;
  stock: number;
  status: "Live" | "Draft" | "Low stock";
};

export const sellerProducts: ProductRow[] = [
  {
    id: "p1",
    name: "Jaipur Special Bhujia",
    region: "Rajasthan",
    price: "₹249",
    stock: 120,
    status: "Live",
  },
  {
    id: "p2",
    name: "Murmura Chivda",
    region: "Maharashtra",
    price: "₹179",
    stock: 8,
    status: "Low stock",
  },
  {
    id: "p3",
    name: "Black Pepper Banana Chips",
    region: "Kerala",
    price: "₹219",
    stock: 0,
    status: "Draft",
  },
  {
    id: "p4",
    name: "Hand-Rolled Chakli",
    region: "Karnataka",
    price: "₹189",
    stock: 64,
    status: "Live",
  },
];

export type OrderRow = {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
};

export const sellerOrders: OrderRow[] = [
  { id: "#NM-2401", customer: "Ananya K.", date: "28 Apr 2026", amount: "₹657", status: "Shipped" },
  { id: "#NM-2402", customer: "Rahul M.", date: "27 Apr 2026", amount: "₹448", status: "Processing" },
  { id: "#NM-2398", customer: "Priya S.", date: "26 Apr 2026", amount: "₹219", status: "Delivered" },
  { id: "#NM-2395", customer: "Vikram R.", date: "25 Apr 2026", amount: "₹892", status: "Delivered" },
  { id: "#NM-2391", customer: "Meera J.", date: "24 Apr 2026", amount: "₹179", status: "Cancelled" },
];
