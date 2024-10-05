"use client";

import { Area, AreaChart, CartesianGrid, Legend } from "recharts";
import { CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import CardLayout from "./layout/card-layout";
import { chartDataCustomer } from "./utils/constants";

const CustomerSatisfaction = () => {
  const chartConfig = {
    lastMonth: {
      label: "Last Month",
      color: "#0095FF",
    },
    thisMonth: {
      label: "This Month",
      color: "#07E098",
    },
  } satisfies ChartConfig;

  return (
    <CardLayout variant={"bottom"}>
      <CardHeader>
        <CardTitle>Customer Satisfaction</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center px-4 pb-0 xl:px-5 2xl:px-6 3xl:px-7">
        <ChartContainer
          className="flex w-full lg:h-[210px] 2xl:h-[250px] 2xl:w-[350px] 3xl:h-[255px] 3xl:w-[350px]"
          config={chartConfig}
        >
          <AreaChart
            accessibilityLayer
            data={chartDataCustomer}
            margin={{
              left: 7,
              right: 7,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0095FF" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07E098" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#07E098" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="lastMonth"
              type="natural"
              dot
              fill="url(#fillLastMonth)"
              fillOpacity={0.4}
              stroke="#0095FF"
              stackId="a"
            />
            <Area
              dataKey="thisMonth"
              dot
              type="natural"
              fill="url(#fillThisMonth)"
              fillOpacity={0.4}
              stroke="#07E098"
              stackId="a"
            />
            <Legend />
          </AreaChart>
        </ChartContainer>

        <CardFooter className="flex w-full items-center justify-center gap-x-12 text-xs text-foreground lg:pb-0">
          <p>$3000</p>
          <p>$4000</p>
        </CardFooter>
      </CardContent>
    </CardLayout>
  );
};

export default CustomerSatisfaction;
