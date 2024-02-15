import Basket from "@/components/Basket";
import { ShoppingCart } from "lucide-react";
import React from "react";

export default function BasketPage() {
  return (
    <div className="w-full p-10 max-w-7xl max-mx-auto">
      <div className="flex items-center space-x-2">
        <ShoppingCart className="w-10 h-10" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>
      <p className="mt-2 mb-5">
        Review the items in your cart and check out when ready !
      </p>
      <Basket />
    </div>
  );
}
