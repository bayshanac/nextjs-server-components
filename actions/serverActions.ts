"use server";

import { revalidateTag } from "next/cache";

export const addProduct = async (formDate: FormData) => {
  const name = formDate.get("name")?.toString();
  const price = formDate.get("price")?.toString();

  if (!name || !price) return;

  const newProduct = {
    name,
    price,
  };

  try {
    await fetch("https://6586e161468ef171392ee908.mockapi.io/api/v1/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return { error };
  }

  revalidateTag("products");
};
