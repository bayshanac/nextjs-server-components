"use server";

import { ProductSchema } from "@/components/addProductComponent/model";
import { getErrorMessage } from "@/lib/utils";
import { revalidateTag } from "next/cache";

export const addProduct = async (newProduct: unknown) => {
  try {
    const result = ProductSchema.safeParse(newProduct);
    if (!result.success) {
      let errorMessage = "";
  
      result.error.issues.forEach((issue) => {
        errorMessage += `${issue.path[0]}: ${issue.message}\n`;
      });
  
      throw new Error(errorMessage);
    }

    await fetch("https://6586e161468ef171392ee908.mockapi.io/api/v1/products2", {
      method: "POST",
      body: JSON.stringify(result.data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  revalidateTag("products");
};
