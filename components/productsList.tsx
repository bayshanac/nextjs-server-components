import { ProductType } from "@/typings";

type ProductsListProps = {
  products: ProductType[];
};

export function ProductsList({ products }: ProductsListProps) {
  return (
    <>
      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p className="bold">{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
