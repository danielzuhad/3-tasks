import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import LayoutProducts from "./layout/layout-products";

const LoadingCardList = () => {
  return (
    <LayoutProducts>
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i} className="h-[250px] w-full max-md:max-w-[200px]">
          <Skeleton className="h-full w-full" />
        </Card>
      ))}
    </LayoutProducts>
  );
};

export default LoadingCardList;
