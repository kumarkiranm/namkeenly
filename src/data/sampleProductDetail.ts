import type { ProductDetail } from "@/types/productDetail";

export const sampleProductDetail: ProductDetail = {
  slug: "kerala-black-pepper-banana-chips",
  name: "Black Pepper Banana Chips",
  region: "Kerala",
  price: "₹219",
  priceNote: "Incl. all taxes · 150 g pack",
  imageLabel: "Banana chips",
  story: [
    "In coastal Kerala, ripe plantains are sliced paper-thin on seasoned boards, then fried in small batches so each chip stays light—not greasy, never heavy.",
    "We source ours from a third-generation kitchen near Kozhikode, where coconut oil is still warmed to the right shimmer before the first slice touches the pan. A crack of black pepper at the finish adds warmth without stealing the fruit’s natural sweetness.",
    "Every bag tastes like the moment after monsoon, when the air is clean and the snack bowl somehow never stays full.",
  ],
  ingredients: [
    "Raw banana (plantain)",
    "Coconut oil",
    "Black pepper",
    "Salt",
  ],
  shelfLife: "Best within 90 days of packing. Store in a cool, dry place away from sunlight. Once opened, reseal tightly and enjoy within a week for peak crunch.",
  seller: {
    id: "malabar-crisp-co",
    name: "Malabar Crisp Co.",
    location: "Kozhikode, Kerala",
    bio: "Family-run since 1988. Small-batch banana chips and mixtures shipped across India from our coastal kitchen.",
    established: "Est. 1988",
    shopHref: "/#sellers",
  },
  reviews: [
    {
      id: "r1",
      author: "Ananya K.",
      rating: 5,
      date: "March 2026",
      title: "Exactly like buying from Calicut",
      body: "Thin, crisp, not overly salty. The pepper is noticeable but balanced. Will reorder for tea time.",
      verified: true,
    },
    {
      id: "r2",
      author: "Rahul M.",
      rating: 5,
      date: "February 2026",
      body: "Packaging kept them intact. Shared with office—gone in one afternoon.",
      verified: true,
    },
    {
      id: "r3",
      author: "Priya S.",
      rating: 4,
      date: "January 2026",
      title: "Lovely crunch",
      body: "Prefer a touch less oil next time but flavour is spot on. Great with filter coffee.",
      verified: true,
    },
  ],
};
