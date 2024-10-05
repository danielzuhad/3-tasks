import React from "react";
import NavbarSide from "../navbar/side/navbar-side";
import NavbarTop from "../navbar/top/navbar-top";

interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <div className="flex min-h-screen w-full">
      <NavbarSide className="max-lg:hidden" />
      <div className="flex w-full flex-col">
        <NavbarTop />
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-full w-full overflow-hidden p-5 max-md:mt-36">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
