"use client";

import { useEffect } from "react";
import useProducts from "./useProducts";
import { useInView } from "react-intersection-observer";
import LayoutProducts from "./layout/layout-products";
import CardProduct from "./card-product";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const ProductList = () => {
  const { data, isLoading, isFetchingNextPage, isError, fetchNextPage } =
    useProducts();
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log("rendered");
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <ScrollArea className="flex-1 overflow-y-auto overflow-x-hidden lg:h-[82vh]">
      <LayoutProducts>
        {isError && <div>Error</div>}

        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="h-[250px] w-full max-md:max-w-[200px]">
                <Skeleton className="h-full w-full" />
              </Card>
            ))
          : data?.pages.map((page) =>
              page.products.map((product) => (
                <CardProduct key={product.id} data={product} />
              )),
            )}
      </LayoutProducts>

      <div
        ref={ref}
        className="grid w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 sm:gap-14 md:grid-cols-4 md:gap-14 lg:gap-10 xl:gap-16 2xl:grid-cols-5 2xl:gap-12"
      >
        {isFetchingNextPage &&
          Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="h-[250px] w-full max-md:max-w-[200px]">
              <Skeleton className="h-full w-full" />
            </Card>
          ))}
      </div>
    </ScrollArea>
  );
};

export default ProductList;
