import { cn } from "@/lib/utils";
import Logo from "./logo";
import Links from "./links";

interface NavbarSideProps {
  className?: string;
}

const NavbarSide = ({ className }: NavbarSideProps) => {
  return (
    <div
      className={cn(
        "3xl:pl-[43px] 3xl:max-w-[345px] min-h-screen w-full max-w-[220px] bg-background pl-[23px] xl:max-w-[230px] xl:pl-7 2xl:max-w-[276px]",
        className,
      )}
    >
      <div>
        {/* logo */}
        <Logo />

        {/* links */}
        <Links />
      </div>
    </div>
  );
};

export default NavbarSide;
