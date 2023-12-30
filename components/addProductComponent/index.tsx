"use client";

import React, { useOptimistic, useRef } from "react";
import { addProduct } from "@/actions/serverActions";
import { Button } from "../button";
import { ProductsList } from "../productsList";
import { AddProductComponentProps, ProductSchema, ProductType } from "./model";
import toast from "react-hot-toast";

export function AddProductComponent({ products }: AddProductComponentProps) {
  const ref = useRef<HTMLFormElement>(null);

  const [optimisticProducts, addOptimisticProduct] = useOptimistic(
    products,
    (currentState, newProduct: ProductType) => {
      return [...currentState, newProduct];
    }
  );

  async function clientAddProduct(formData: FormData) {
    const newProduct: ProductType = {
      name: formData.get("name")?.toString() ?? "",
      price: formData.get("price")?.toString() ?? "",
    };

    const result = ProductSchema.safeParse(newProduct);

    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage += `${issue.path[0]}: ${issue.message}\n`;
      });
      toast.error(errorMessage);
      return;
    }

    addOptimisticProduct({ ...newProduct, id: Math.random().toString() });

    const response = await addProduct(newProduct);
    if (response?.error) {
      console.log('response', response);
      toast.error(response.error);
      return;
    }

    ref.current?.reset();
    toast.success("Product added successfully");
  }

  return (
    <>
      <form
        ref={ref}
        action={clientAddProduct}
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

      <ProductsList products={optimisticProducts} />
    </>
  );
}
