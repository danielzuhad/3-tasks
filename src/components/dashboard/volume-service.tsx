"use client";

import { Bar, BarChart, CartesianGrid } from "recharts";
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

const VolumeSercive = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <CardLayout className="w-full max-xl:max-w-[500px]">
      <CardHeader>
        <CardTitle className="xl:leading-7 3xl:leading-8">
          Volume Service
        </CardTitle>

        <CardContent className="w-full px-0 xl:mt-2 2xl:mt-3 3xl:mt-[18px]">
          <ChartContainer
            className="flex h-[200px] w-full justify-center"
            config={chartConfig}
          >
            <BarChart barSize={12} accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="desktop"
                stackId="a"
                fill="var(--color-desktop)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="mobile"
                stackId="a"
                fill="var(--color-mobile)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </CardHeader>
    </CardLayout>
  );
};

export default VolumeSercive;
