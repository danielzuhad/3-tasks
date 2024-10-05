"use client";

import { Bar, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { chartData } from "./utils/constants";
import CardLayout from "./layout/card-layout";

const Visitors = () => {
  const chartConfig = {
    loyalCustomers: {
      label: "Loyal Customers",
      color: "hsl(278, 100%, 50%)",
    },
    newCustomers: {
      label: "New Customers",
      color: "hsl(0, 83%, 60%)",
    },
    uniqueCustomers: {
      label: "Unique Customers",
      color: "hsl(136, 65%, 55%)",
    },
  } satisfies ChartConfig;

  return (
    <CardLayout className="lg:max-xl:h-full">
      <CardHeader>
        <CardTitle className="pb-2 leading-8">Visitor Insights</CardTitle>
      </CardHeader>

      <CardContent className="mt-4 flex items-center justify-center px-4 pb-4 xl:px-5 2xl:mt-6 2xl:px-6 2xl:pb-5 3xl:mt-7 3xl:px-7 3xl:pb-6">
        <ChartContainer
          config={chartConfig}
          className="min-h-full w-full lg:max-xl:h-[320px] xl:h-[178px] 2xl:h-[182px] 3xl:h-[220px]"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} width={20} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="loyalCustomers"
              type="monotone"
              stroke="hsl(278, 100%, 50%)"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="newCustomers"
              type="monotone"
              stroke="hsl(0, 83%, 60%)"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="uniqueCustomers"
              type="monotone"
              stroke="hsl(136, 65%, 55%)"
              strokeWidth={4}
              dot={false}
            />

            {/* legend */}
            <ChartLegend
              className="pt-6 2xl:pt-8 3xl:pt-10"
              content={<ChartLegendContent />}
            />
            <Bar
              dataKey="loyalCustomers"
              fill="hsl(278, 100%, 50%)"
              radius={4}
            />
            <Bar dataKey="newCustomers" fill="hsl(0, 83%, 60%)" radius={4} />
            <Bar
              dataKey="uniqueCustomers"
              fill="hsl(136, 65%, 55%)"
              radius={4}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </CardLayout>
  );
};

export default Visitors;
