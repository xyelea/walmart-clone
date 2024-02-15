"use client";

import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings";
import React from "react";
import { Button } from "./ui/button";

export default function RemoveFromCart({ product }: { product: Product }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    console.log("removing from cart : " + product.meta.sku);
    removeFromCart(product);
  };
  return (
    <Button onClick={handleRemove} className="bg-walmart hover:bg-walmart/50">
      -
    </Button>
  );
}
