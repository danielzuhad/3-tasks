import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "./utils/product";

const useProducts = () => {
  const LIMIT = 15;

  const fetchProducts = async ({ pageParam }: { pageParam: number }) => {
    const response = await axios.get<ProductType[]>(
      `https://api.escuelajs.co/api/v1/products`,
    );

    return {
      products: response.data.slice(pageParam, pageParam + LIMIT),
      currentPage: pageParam,
      nextPage:
        pageParam + LIMIT < response.data.length ? pageParam + LIMIT : null,
    };
  };

  const {
    data,
    isLoading,
    isFetching,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });

  return {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useProducts;
