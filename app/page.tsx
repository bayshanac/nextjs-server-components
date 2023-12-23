export type ProductType = {
  id?: number;
  name: string;
  price: string;
};

export default async function Home() {
  const res = await fetch(
    "https://6586e161468ef171392ee908.mockapi.io/api/v1/products",
    {
      cache: "no-cache",
    }
  );

  const products: ProductType[] = await res.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Product Warehouse</h1>

      <form action={""} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product name..."
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Price..."
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add product
        </button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p className="bold">{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
