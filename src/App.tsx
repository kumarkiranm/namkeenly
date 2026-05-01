import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { SellerDashboardPage } from "@/pages/seller/SellerDashboardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:slug" element={<ProductDetailPage />} />
      <Route path="/seller" element={<SellerDashboardPage />} />
    </Routes>
  );
}
