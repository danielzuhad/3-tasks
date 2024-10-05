import { cn } from "@/lib/utils";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { ScrollArea } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import CardLayout from "./layout/card-layout";
import { dataTopProducts } from "./utils/constants";
import { badgeStyle, getClassName, getColor } from "./utils/conditional-color";

const TopProducts = () => {
  return (
    <CardLayout>
      <CardHeader>
        <CardTitle className="xl:leading-7 3xl:leading-8">
          Top Products
        </CardTitle>

        <CardContent className="w-full px-0 lg:pb-0 xl:mt-2 2xl:mt-3">
          <ScrollArea className="h-[243px] w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-2 text-left">#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Popularity</TableHead>
                  <TableHead className="text-right">Sales</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {dataTopProducts.map((item, index) => (
                  <TableRow key={index} className="">
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Progress
                        value={item.popularity}
                        className={cn(getClassName(item))}
                        color={getColor(item)}
                      />
                    </TableCell>
                    <TableCell className="flex justify-end text-right">
                      <p
                        className={`rounded-md border-2 px-2 ${badgeStyle(item)}`}
                      >
                        {item.sales}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </CardHeader>
    </CardLayout>
  );
};

export default TopProducts;
