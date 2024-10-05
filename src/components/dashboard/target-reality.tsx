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
import { chartDataTarget, legendChartTarget } from "./utils/constants";
import { cn } from "@/lib/utils";

const TargetReality = () => {
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
    <CardLayout variant={"bottom"}>
      <CardHeader>
        <CardTitle>Target Reality</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartDataTarget}>
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

        <CardFooter className="flex w-full flex-col items-start gap-y-1 px-2 pb-0 pr-28">
          {legendChartTarget.map((item, index) => (
            <LegendComponent key={index} data={item} />
          ))}
        </CardFooter>
      </CardContent>
    </CardLayout>
  );
};

export default TargetReality;

const LegendComponent = ({ data }: { data: (typeof legendChartTarget)[0] }) => {
  return (
    <div className="flex h-9 w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "h-9 w-9 rounded-md",
            data.label === "Target Sales" && "bg-[#E2FFF3]",
            data.label === "Reality Sales" && "bg-[#FFF4DE]",
          )}
        />
        <div>
          <p className="text-xs font-semibold leading-4 text-foreground">
            {data.label}
          </p>
          <p className="text-[10px] leading-4 text-muted-foreground">
            {data.description}
          </p>
        </div>
      </div>
      <p
        className={cn(
          "text-sm font-medium",
          data.label === "Target Sales" && "text-[#27AE60]",
          data.label === "Reality Sales" && "text-[#FFA800]",
        )}
      >
        8.823
      </p>
    </div>
  );
};
