import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const layoutVariants = cva(
  "grid place-items-center gap-[10px] md:gap-[12px] grid-cols-1 w-full lg:grid-cols-2 lg:gap-[17px]",
  {
    variants: {
      variant: {
        top: "3xl:gap-[31px] 2xl:gap-[25px] xl:gap-[21px] xl:grid-cols-[540px_1fr] 2xl:grid-cols-[702px_1fr] 3xl:grid-cols-[877px_1fr]",
        bottom:
          "3xl:grid-cols-[645px_1fr_1fr] xl:grid-cols-3 lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] 3xl:gap-[31px] mt-3 pb-5 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-8",
      },
    },

    defaultVariants: {
      variant: "top",
    },
  },
);

interface LayoutDashboardProps
  extends ComponentProps<"div">,
    VariantProps<typeof layoutVariants> {
  className?: string;
  children?: React.ReactNode;
}

const LayoutDashboard = ({
  className,
  children,
  variant,
  ...props
}: LayoutDashboardProps) => {
  return (
    <div className={cn(layoutVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

export default LayoutDashboard;
