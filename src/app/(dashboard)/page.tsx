import CustomerSatisfaction from "@/components/dashboard/customer-satisfaction";
import LayoutDashboard from "@/components/dashboard/layout/layout-dashboard";
import SalesMapping from "@/components/dashboard/sales-mapping";
import TargetReality from "@/components/dashboard/target-reality";
import TodaySales from "@/components/dashboard/today-sales";
import TopProducts from "@/components/dashboard/top-products";
import TotalRevenue from "@/components/dashboard/total-revenue";
import Visitors from "@/components/dashboard/visitors";
import VolumeSercive from "@/components/dashboard/volume-service";

export default function Dashboard() {
  return (
    <div className="flex h-full w-full overflow-hidden max-md:mt-36">
      <div className="flex-1 overflow-y-auto p-5 lg:p-4 xl:p-5 2xl:p-6 3xl:p-8">
        <LayoutDashboard>
          <TodaySales />
          <Visitors />
        </LayoutDashboard>

        <LayoutDashboard
          variant={"bottom"}
          className="mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-8"
        >
          <TotalRevenue />
          <CustomerSatisfaction />
          <TargetReality />
          <TopProducts />
          <SalesMapping />
          <VolumeSercive />
        </LayoutDashboard>
      </div>
    </div>
  );
}
