"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import CardLayout from "./layout/card-layout";

const TargetReality = () => {
  const chartData = [
    { month: "January", realitySales: 186, targetSales: 80 },
    { month: "February", realitySales: 305, targetSales: 200 },
    { month: "March", realitySales: 237, targetSales: 120 },
    { month: "April", realitySales: 73, targetSales: 190 },
    { month: "May", realitySales: 209, targetSales: 130 },
    { month: "June", realitySales: 214, targetSales: 140 },
    { month: "July", realitySales: 214, targetSales: 140 },
  ];

  const chartConfig = {
    realitySales: {
      label: "Reality Sales",
      color: "#4AB58E",
    },
    targetSales: {
      label: "Target Sales",
      color: "#FFCF00",
    },
  } satisfies ChartConfig;

  return (
    <CardLayout variant={"bottom"} className="h-full max-xl:max-w-[500px]">
      <CardHeader>
        <CardTitle>Target Reality</CardTitle>
      </CardHeader>

      <CardContent className="mt-3 px-0 pb-2 xl:mt-4 xl:pb-[18px] 2xl:mt-5 2xl:pb-[22px] 3xl:mt-[25px] 3xl:pb-7">
        <ChartContainer config={chartConfig} className="">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="realitySales" fill="#4AB58E" radius={4} />
            <Bar dataKey="targetSales" fill="#FFCF00" radius={4} />
          </BarChart>
        </ChartContainer>

        <CardFooter className="px-2">test</CardFooter>
      </CardContent>
    </CardLayout>
  );
};

export default TargetReality;
