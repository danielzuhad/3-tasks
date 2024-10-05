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

const TopProducts = () => {
  return (
    <CardLayout className="w-full max-xl:max-w-[500px]">
      <CardHeader>
        <CardTitle className="xl:leading-7 3xl:leading-8">
          Top Products
        </CardTitle>

        <CardContent className="w-full px-0 xl:mt-2 2xl:mt-3 3xl:mt-[18px]">
          <ScrollArea className="h-[245px] w-full">
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
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Progress value={item.popularity} />
                    </TableCell>
                    <TableCell className="text-right">{item.sales}</TableCell>
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
