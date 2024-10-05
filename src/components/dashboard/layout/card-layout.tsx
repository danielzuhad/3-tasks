import { cn } from "@/lib/utils";
import { Card } from "../../ui/card";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const cardVariants = cva(
  "w-full max-lg:max-w-[500px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-2xl 3xl:rounded-[20px] h-full ",
  {
    variants: {
      variant: {
        top: "3xl:h-[348px]",
        bottom: "3xl:h-[351px]",
      },
    },

    defaultVariants: {
      variant: "top",
    },
  },
);

interface CardLayoutProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
  className?: string;
}

const CardLayout = ({ children, className, variant }: CardLayoutProps) => {
  return (
    <Card className={cn(cardVariants({ variant, className }))}>{children}</Card>
  );
};

export default CardLayout;
