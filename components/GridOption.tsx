import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  className?: string;
  image?: string;
}

export default function GridOption({ title, className, image }: Props) {
  return (
    <Link
      href={{ pathname: "/search", query: { q: title } }}
      className={cn("grid-option relative", className)}>
      <h2 className="font-bold text-xl">{title}</h2>

      {image && (
        <Image
          src={image}
          layout="fill"
          alt={title}
          className="object-cover opacity-20 rounded-md"
        />
      )}
    </Link>
  );
}
