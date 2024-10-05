import { FolderUp } from "lucide-react";
import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CardLayout from "./layout/card-layout";
import { dataTodaySales } from "./utils/constants";
import { cn } from "@/lib/utils";

const TodaySales = () => {
  return (
    <CardLayout className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1.5">
          <CardTitle>Today&apos;s Sales</CardTitle>
          <CardDescription className="leading-7">Sales Summary</CardDescription>
        </div>

        <Button
          size={"default"}
          variant={"outline"}
          className="flex h-[40px] items-center gap-x-[8px] text-[14px] font-medium"
        >
          <FolderUp size={12} />
          export
        </Button>
      </CardHeader>

      <CardContent className="grid h-full grid-cols-1 pt-5 max-xl:pb-24 sm:gap-5 md:grid-cols-2 lg:gap-[20px] lg:pt-5 xl:grid-cols-4 xl:gap-3 xl:pt-6 2xl:grid-cols-4 2xl:gap-6 2xl:pt-8 3xl:gap-[30px] 3xl:pt-10">
        {dataTodaySales.map((item, index) => (
          <Box key={index} data={item} />
        ))}
      </CardContent>
    </CardLayout>
  );
};

export default TodaySales;

const Box = ({ data }: { data: (typeof dataTodaySales)[0] }) => {
  return (
    <div
      className={cn(
        "h-max w-full rounded-[16px] p-5 lg:rounded-[8px] xl:rounded-[10px] 3xl:max-w-[180px] 3xl:rounded-[16px]",
        data.title === "Total Sales" && "bg-[#FFE2E5]",
        data.title === "Total Order" && "bg-[#FFF4DE]",
        data.title === "Product Sold" && "bg-[#DCFCE7]",
        data.title === "New Customers" && "bg-[#F3E8FF]",
      )}
    >
      <div
        className={cn(
          "aspect-square w-3 rounded-full lg:w-5 xl:w-6 2xl:w-8 3xl:w-10",
          data.title === "Total Sales" && "bg-[#FA5A7D]",
          data.title === "Total Order" && "bg-[#FF947A]",
          data.title === "Product Sold" && "bg-[#3CD856]",
          data.title === "New Customers" && "bg-[#BF83FF]",
        )}
      />
      <p className="mt-1 text-xl font-semibold text-foreground lg:mt-2 xl:mt-2 xl:text-base 2xl:mt-3 2xl:text-xl 3xl:mt-4 3xl:text-2xl">
        {data.value}
      </p>
      <p className="mt-1.5 text-xs font-medium text-[#425166] xl:text-[10px] 2xl:text-xs 3xl:mt-2 3xl:text-base">
        {data.title}
      </p>
      <p className="mt-1.5 text-[9px] font-medium text-[#4079ED] xl:text-[8px] 3xl:mt-2 3xl:text-xs">
        {data.description}
      </p>
    </div>
  );
};
