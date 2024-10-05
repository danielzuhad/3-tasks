"use client";

import { CircleGauge, ListChecks, ShoppingCart } from "lucide-react";
import LinkButton from "./link-button";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();

  const LINKS = [
    {
      title: "Dashboard",
      href: "/",
      icon: (
        <CircleGauge size={21} color={pathname === "/" ? "white" : "#737791"} />
      ),
    },
    {
      title: "Products",
      href: "/products",
      icon: (
        <ShoppingCart
          size={21}
          color={pathname === "/product" ? "white" : "#737791"}
        />
      ),
    },
    {
      title: "Todo List",
      href: "/todo-list",
      icon: (
        <ListChecks
          size={21}
          color={pathname === "/todo-list" ? "white" : "#737791"}
        />
      ),
    },
  ];

  return (
    <div className="flex w-[134px] flex-col gap-y-4 xl:w-[168px] xl:gap-y-5 2xl:w-[201px] 2xl:gap-y-6 3xl:w-[252px] 3xl:gap-y-7">
      {LINKS.map((link, i) => (
        <LinkButton key={i} {...link} />
      ))}
    </div>
  );
};

export default Links;
