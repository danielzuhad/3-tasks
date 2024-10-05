import { cn } from "@/lib/utils";
import NavbarSheet from "./navbar-sheet";
import Title from "./title";
import Profile from "./profile";
import Search from "./search";
import Language from "./language";

interface NavbarTopProps {
  className?: string;
}

const NavbarTop = ({ className }: NavbarTopProps) => {
  return (
    <div
      className={cn(
        "z-50 flex h-[64px] items-center justify-between bg-background px-5 max-lg:fixed max-lg:w-full xl:min-h-[80px] xl:px-[26px] 2xl:min-h-[96px] 2xl:px-8 3xl:min-h-[120px] 3xl:px-10",
        className,
      )}
    >
      <div className="flex items-center max-lg:hidden">
        <Title />
        <Search />
        <Language />
      </div>

      <div className="flex items-center gap-x-2">
        <Profile />
        <NavbarSheet />
      </div>
    </div>
  );
};

export default NavbarTop;
