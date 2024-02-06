import { ProductType } from "./addProductComponent/model";

type ProductsListProps = {
  products: ProductType[];
};

export function ProductsList({ products }: ProductsListProps) {
  return (
    <>
      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow bg-primary">
            <p className="bold text-white">{product.name}</p>
            <p className="text-white">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
