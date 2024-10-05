interface LayoutProductsProps {
  children: React.ReactNode;
}

const LayoutProducts = ({ children }: LayoutProductsProps) => {
  return (
    <div className="grid w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 sm:gap-14 md:grid-cols-4 md:gap-14 lg:gap-10 xl:gap-16 2xl:grid-cols-5 2xl:gap-12">
      {children}
    </div>
  );
};

export default LayoutProducts;
