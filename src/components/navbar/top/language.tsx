import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

const Language = () => {
  return (
    <div>
      <div className="3xl:gap-x-[13px] flex items-center lg:gap-x-[7px] xl:gap-x-[9px] 2xl:gap-x-[11px]">
        <Avatar className="3xl:h-[24px] 3xl:w-[24px] rounded-full lg:h-[13px] lg:w-[13px] xl:h-[16px] xl:w-[16px] 2xl:h-[19px] 2xl:w-[19px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <p className="3xl:text-[18px] font-semibold text-foreground lg:text-[7px] xl:text-[12px] 2xl:text-[14px]">
          Eng (US)
        </p>

        <div className="3xl:ml-[23px] flex h-1/2 items-center lg:ml-[12px] xl:ml-[15px] 2xl:ml-[18px]">
          <ChevronDown size={12} strokeWidth={3} color="#A098AE" />
        </div>
      </div>
    </div>
  );
};

export default Language;
