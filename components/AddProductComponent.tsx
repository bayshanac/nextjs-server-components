"use client";

import React, { useOptimistic, useRef } from "react";
import { addProduct } from "@/actions/serverActions";
import { Button } from "./button";
import { ProductType } from "@/typings";


type AddProductComponentProps = {
  products: ProductType[];
};

export function AddProductComponent({products} : AddProductComponentProps) {
  const ref = useRef<HTMLFormElement>(null);

  const [optimisticProducts, addOptimisticProduct] = useOptimistic(products, (currentState, newProduct: ProductType) => {
    return [...currentState, newProduct];
  });

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          addOptimisticProduct({
            id: Math.random(),
            name: formData.get("name")?.toString() ?? "",
            price: formData.get("price")?.toString() ?? "",
          });
          await addProduct(formData);
        }}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="name"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product name..."
        />
        <input
          name="price"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Price..."
        />
        <Button />
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {optimisticProducts.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p className="bold">{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
