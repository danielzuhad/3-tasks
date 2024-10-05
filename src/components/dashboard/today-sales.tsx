import { FolderUp } from "lucide-react";
import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CardLayout from "./layout/card-layout";

const TodaySales = () => {
  return (
    <CardLayout>
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

      <CardContent className="grid h-full grid-cols-1 gap-[20px] pt-5 sm:grid-cols-2 lg:gap-x-[20px] lg:pt-5 xl:grid-cols-4 xl:gap-x-3 xl:pt-6 2xl:grid-cols-4 2xl:gap-x-6 2xl:pt-8 3xl:gap-x-[30px] 3xl:pt-10">
        <Box />
        <Box />
        <Box />
        <Box />
      </CardContent>
    </CardLayout>
  );
};

export default TodaySales;

const Box = () => {
  return (
    <div className="h-max w-full rounded-[16px] bg-[#FFE2E5] p-5 lg:rounded-[8px] xl:rounded-[10px] 3xl:max-w-[180px] 3xl:rounded-[16px]">
      <div className="aspect-square w-3 rounded-full bg-[#FA5A7D] lg:w-5 xl:w-6 2xl:w-8 3xl:w-10" />
      <p className="mt-1 text-xl font-semibold text-foreground lg:mt-2 xl:mt-2 xl:text-base 2xl:mt-3 2xl:text-xl 3xl:mt-4 3xl:text-2xl">
        $1k
      </p>
      <p className="mt-1.5 text-xs font-medium text-[#425166] xl:text-[10px] 2xl:text-xs 3xl:mt-2 3xl:text-base">
        Total Sales
      </p>
      <p className="mt-1.5 text-[9px] font-medium text-[#4079ED] xl:text-[8px] 3xl:mt-2 3xl:text-xs">
        +8% from yesterday
      </p>
    </div>
  );
};
