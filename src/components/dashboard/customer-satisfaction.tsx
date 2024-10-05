"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import CardLayout from "./layout/card-layout";

const CustomerSatisfaction = () => {
  const chartData = [
    { month: "January", lastMonth: 186, thisMonth: 80 },
    { month: "February", lastMonth: 305, thisMonth: 200 },
    { month: "March", lastMonth: 237, thisMonth: 120 },
    { month: "April", lastMonth: 73, thisMonth: 190 },
    { month: "May", lastMonth: 209, thisMonth: 130 },
    { month: "June", lastMonth: 214, thisMonth: 140 },
  ];
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
    <CardLayout
      variant={"bottom"}
      className="h-full w-full max-xl:max-w-[500px]"
    >
      <CardHeader className="px-4 xl:px-5 2xl:px-6 3xl:px-7">
        <CardTitle>Customer Satisfaction</CardTitle>
      </CardHeader>

      <CardContent className="mt-3 flex justify-center px-4 pb-2 xl:mt-4 xl:px-5 xl:pb-[18px] 2xl:mt-5 2xl:px-6 2xl:pb-[22px] 3xl:mt-[25px] 3xl:px-7 3xl:pb-7">
        <ChartContainer
          className="3xl:h-[255px] 3xl:w-[364px]"
          config={chartConfig}
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
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
            <ChartLegend
              className="pt-3 xl:pt-4 2xl:pt-5 3xl:pt-6"
              content={<CustomChartLegend />}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </CardLayout>
  );
};

export default CustomerSatisfaction;

const CustomChartLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="flex justify-center space-x-4">
      {payload.map((entry: any, index: number) => (
        <div key={`legend-${index}`} className="flex items-center space-x-2">
          {/* Custom Legend Icon */}
          <div
            className="h-4 w-4 rounded"
            style={{ backgroundColor: entry.color }}
          ></div>
          {/* Legend Label */}
          <span className="text-sm">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
