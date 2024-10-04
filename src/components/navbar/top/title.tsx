"use client";

import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname();

  const titleConditional = () => {
    switch (pathname) {
      case "/":
        return "Dashboard";
      case "/products":
        return "Products";
      case "/todo-lists":
        return "Todo Lists";
      default:
        return "Dashboard";
    }
  };

  return (
    <h3 className="3xl:text-4xl h-max text-sm font-semibold text-foreground sm:text-base xl:text-2xl 2xl:text-3xl">
      {titleConditional()}
    </h3>
  );
};

export default Title;
