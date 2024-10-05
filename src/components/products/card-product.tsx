import { Card, CardContent, CardHeader } from "../ui/card";
import { ProductType } from "./utils/product";
import { fixImageFormat } from "./utils/utils";

interface CardProductProps {
  className?: string;
  data: ProductType;
}

const CardProduct = ({ data }: CardProductProps) => {
  const fixedImages = data.images.map((image) => fixImageFormat(image));

  return (
    <Card className="h-full w-full max-md:max-w-[200px]">
      <CardHeader className="flex w-full items-center justify-center overflow-hidden p-0">
        {/* Pastikan gambar ada dan diakses dengan benar */}
        {fixedImages && fixedImages.length > 0 ? (
          <img
            width={100}
            height={100}
            src={fixedImages[0]}
            alt={data.title}
            className="w-full rounded-t-lg object-contain"
          />
        ) : (
          <div>No Image Available</div> // Tampilan jika gambar tidak ada
        )}
      </CardHeader>

      <CardContent className="mt-1.5 px-[8px] pb-4 max-sm:mt-1 md:px-3">
        {/* category */}
        <div className="flex w-full items-center justify-between text-[10px]">
          {/* badge */}
          <p className="line-clamp-1 flex items-center justify-center rounded-md bg-primary px-3 py-0.5 text-[8px] font-semibold text-primary-foreground opacity-50 lg:text-[9px]">
            {data.category.name}
          </p>
          <div className="flex items-center justify-end space-x-1 text-sm font-bold text-primary">
            <p className="text-[10px] opacity-50 lg:text-xs">$</p>
            <p className="line-clamp-1 text-xs lg:text-base xl:text-xl">
              {data.price}
            </p>
          </div>
        </div>

        {/* title */}
        <p className="mt-1 line-clamp-2 w-full text-[10px] font-bold leading-4 text-foreground md:mt-2 md:text-xs lg:leading-4 xl:text-sm xl:leading-5 3xl:text-base">
          {data.title}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
