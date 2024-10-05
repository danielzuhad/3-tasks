import CustomerSatisfaction from "@/components/dashboard/customer-satisfaction";
import LayoutDashboard from "@/components/dashboard/layout/layout-dashboard";
import SalesMapping from "@/components/dashboard/sales-mapping";
import TargetReality from "@/components/dashboard/target-reality";
import TodaySales from "@/components/dashboard/today-sales";
import TopProducts from "@/components/dashboard/top-products";
import TotalRevenue from "@/components/dashboard/total-revenue";
import Visitors from "@/components/dashboard/visitors";
import VolumeSercive from "@/components/dashboard/volume-service";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  return (
    <ScrollArea className="flex-1 overflow-y-auto overflow-x-hidden lg:max-h-[82vh]">
      <LayoutDashboard>
        <TodaySales />
        <Visitors />
      </LayoutDashboard>

      <LayoutDashboard variant={"bottom"}>
        <TotalRevenue />
        <CustomerSatisfaction />
        <TargetReality />
        <TopProducts />
        <SalesMapping />
        <VolumeSercive />
      </LayoutDashboard>
    </ScrollArea>
  );
}
