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
import { chartDataVolumeService } from "./utils/constants";

const VolumeSercive = () => {
  const chartConfig = {
    volume: {
      label: "Volume",
      color: "#0095FF",
    },
    services: {
      label: "Services",
      color: "#00E096",
    },
  } satisfies ChartConfig;

  return (
    <CardLayout className="h-full w-full max-xl:max-w-[500px]">
      <CardHeader>
        <CardTitle className="xl:leading-7 3xl:leading-8">
          Volume Service
        </CardTitle>

        <CardContent className="w-full px-0 xl:mt-2 2xl:mt-3 3xl:mt-[18px]">
          <ChartContainer
            className="flex h-[200px] w-full justify-center"
            config={chartConfig}
          >
            <BarChart
              barSize={12}
              accessibilityLayer
              data={chartDataVolumeService}
            >
              <CartesianGrid vertical={false} />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="volume"
                stackId="a"
                fill="#0095FF"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="services"
                stackId="a"
                fill="#00E096"
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
