"use client";

import { CardContent, CardHeader, CardTitle } from "../ui/card";
import CardLayout from "./layout/card-layout";
import { PieChart } from "@mui/x-charts/PieChart";
import { chartDataSales } from "./utils/constants";

const SalesMapping = () => {
  return (
    <CardLayout>
      <CardHeader>
        <CardTitle className="xl:leading-7 3xl:leading-8">
          Sales Mapping
        </CardTitle>
      </CardHeader>

      <CardContent className="mt-3 px-4 pb-2 xl:mt-4 xl:px-5 xl:pb-[18px] 2xl:mt-5 2xl:px-6 2xl:pb-[22px] 3xl:mt-[25px] 3xl:px-7 3xl:pb-7">
        <PieChart
          colors={[
            "#1F3863",
            "#BCD6ED",
            "#00AFEF",
            "#BF83FF",
            "#000000",
            "#979797",
            "#4471C4",
          ]}
          series={[
            {
              data: chartDataSales,
            },
          ]}
          width={350}
          height={200}
        />
      </CardContent>
    </CardLayout>
  );
};

export default SalesMapping;
