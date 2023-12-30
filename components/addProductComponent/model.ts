import { z } from "zod";

export type AddProductComponentProps = {
  products: ProductType[];
};

export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(3, { message: "Product name should have minimum 3 characters" })
    .max(50, { message: "Product name should have maximum 50 characters" }),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, {
      message: "Price should be a number with 2 decimal places",
    }),
});

export type ProductType = z.infer<typeof ProductSchema>;
