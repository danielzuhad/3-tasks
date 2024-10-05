"use client";

import { useEffect } from "react";
import CardProduct from "../card-product";
import useProducts from "../useProducts";
import LayoutProducts from "./layout-products";
import { useInView } from "react-intersection-observer";

const ProductList = () => {
  const { data, isLoading, isFetchingNextPage, isError, fetchNextPage } =
    useProducts();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <LayoutProducts>
      {isError && <div>Error</div>}

      {isLoading ? (
        <div>loading</div>
      ) : (
        data?.pages.map((page) =>
          page.products.map((product) => (
            <CardProduct key={product.id} data={product} />
          )),
        )
      )}

      <div ref={ref}>{isFetchingNextPage && <div>loading</div>}</div>
    </LayoutProducts>
  );
};

export default ProductList;
