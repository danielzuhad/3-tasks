import { Menu } from "lucide-react";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import NavbarSide from "../side/navbar-side";

const NavbarSheet = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <NavbarSide className="max-w-sm" />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarSheet;
