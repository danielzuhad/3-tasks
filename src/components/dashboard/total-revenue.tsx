"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import CardLayout from "./layout/card-layout";

const TotalRevenue = () => {
  const chartData = [
    { day: "Monday", onlineSales: 186, offlineSales: 80 },
    { day: "Tuesday", onlineSales: 305, offlineSales: 200 },
    { day: "Wednesday", onlineSales: 237, offlineSales: 120 },
    { day: "Thursday", onlineSales: 73, offlineSales: 190 },
    { day: "Friday", onlineSales: 209, offlineSales: 130 },
    { day: "Saturday", onlineSales: 214, offlineSales: 140 },
    { day: "Sunday", onlineSales: 214, offlineSales: 140 },
  ];

  const chartConfig = {
    onlineSales: {
      label: "Online Sales",
      color: "hsl(204, 100%, 50%)",
    },
    offlineSales: {
      label: "Offline Sales",
      color: "hsl(163, 100%, 44%)",
    },
  } satisfies ChartConfig;

  return (
    <CardLayout
      variant={"bottom"}
      className="h-full w-full max-xl:max-w-[500px]"
    >
      <CardHeader className="px-4 xl:px-5 2xl:px-6 3xl:px-7">
        <CardTitle>Total Revenue</CardTitle>
      </CardHeader>

      <CardContent className="mt-3 px-4 pb-2 xl:mt-4 xl:px-5 xl:pb-[18px] 2xl:mt-5 2xl:px-6 2xl:pb-[22px] 3xl:mt-[25px] 3xl:px-7 3xl:pb-7">
        <ChartContainer
          config={chartConfig}
          className="h-full w-full 3xl:h-[250px]"
        >
          <BarChart barSize={12} accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis tickLine={false} axisLine={false} width={30} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="onlineSales" fill="hsl(204, 100%, 50%)" radius={4} />
            <Bar dataKey="offlineSales" fill="hsl(163, 100%, 44%)" radius={4} />

            {/* legend */}
            <ChartLegend
              className="pt-3 xl:pt-4 2xl:pt-5 3xl:pt-6"
              content={<ChartLegendContent />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </CardLayout>
  );
};

export default TotalRevenue;
