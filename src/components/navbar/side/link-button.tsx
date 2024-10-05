"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const LinkButton = ({
  href,
  title,
  icon,
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <a
      href={href}
      className={cn(
        "flex w-full items-center rounded-lg py-[10px] pl-3 xl:rounded-xl xl:py-[12.5px] xl:pl-4 2xl:rounded-xl 2xl:py-[14px] 2xl:pl-4 3xl:rounded-2xl 3xl:py-[18.5px] 3xl:pl-6",
        pathname === href && "bg-primary",
      )}
    >
      {icon}

      <p
        className={cn(
          "flex justify-center pl-3 text-[10px] font-semibold text-muted-foreground xl:pl-4 xl:text-xs 2xl:pl-5 2xl:text-base 3xl:pl-6 3xl:text-lg",
          pathname === href && "text-white",
        )}
      >
        {title}
      </p>
    </a>
  );
};

export default LinkButton;
