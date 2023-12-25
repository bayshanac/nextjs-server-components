import { AddProductComponent } from "@/components/AddProductComponent";
import { ProductType } from "@/typings";

export default async function Home() {
  const res = await fetch(
    "https://6586e161468ef171392ee908.mockapi.io/api/v1/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      }
    }
  );

  const products: ProductType[] = await res.json();



  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Product Warehouse</h1>
      <AddProductComponent products={products} />
    </main>
  );
}
