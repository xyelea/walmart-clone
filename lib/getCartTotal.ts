import { Product } from "@/typings/productTypings";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce(
    (acc: number, currentProduct: Product) => acc + currentProduct.price,
    0
  );

  const currency = products[0]?.currency || "";
  return `${currency} ${total.toFixed(2)}`;
}
