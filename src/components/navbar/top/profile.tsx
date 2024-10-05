import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex h-6 w-max items-center max-lg:hidden lg:h-8 xl:h-10 2xl:h-[48px] 3xl:h-[60px]">
      {/* bell */}
      <div className="3xl:mr-63xl:rounded-xl relative mr-2 flex aspect-square items-center justify-center bg-[#FFFAF1] lg:mr-[13px] lg:rounded-sm lg:p-[6px] xl:mr-4 xl:rounded-md xl:p-[8px] 2xl:mr-5 2xl:rounded-lg 2xl:p-[9px] 3xl:p-[12px]">
        <div className="absolute right-2 top-1 h-1.5 w-1.5 rounded-full bg-red-500" />
        <Bell size={20} color="#FCD34D" />
      </div>

      {/* profile */}
      <div className="flex h-full w-full items-center lg:gap-x-2 xl:gap-x-3 2xl:gap-x-4 3xl:gap-x-5">
        <Avatar className="rounded-sm lg:h-[32px] lg:w-[32px] lg:rounded-[8px] xl:h-[40px] xl:w-[40px] xl:rounded-[10px] 2xl:h-[48px] 2xl:w-[48px] 2xl:rounded-[12px] 3xl:h-[60px] 3xl:w-[60px] 3xl:rounded-[16px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex h-full">
          <div className="h-full lg:mr-7 xl:mr-9 2xl:mr-12 3xl:mr-14">
            <p className="flex h-1/2 items-center font-semibold text-foreground lg:text-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px]">
              Musfiq
            </p>
            <p className="flex h-1/2 items-center text-muted-foreground lg:text-[7px] xl:text-[9px] 2xl:text-[11px] 3xl:text-[14px]">
              Admin
            </p>
          </div>

          <div className="flex h-1/2 items-center">
            <ChevronDown size={16} strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
