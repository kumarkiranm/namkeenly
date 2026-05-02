import { ProductDetailPage } from "@/views/ProductDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  await params;
  return <ProductDetailPage />;
}
