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
        "min-h-screen w-full max-w-[220px] bg-background pl-[23px] xl:max-w-[230px] xl:pl-7 2xl:max-w-[276px] 3xl:max-w-[345px] 3xl:pl-[43px]",
        className,
      )}
    >
      <div>
        <Logo />

        <Links />
      </div>
    </div>
  );
};

export default NavbarSide;
