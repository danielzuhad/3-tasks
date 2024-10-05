import ProductList from "./layout/product-list";

const ProductsSection = () => {
  return (
    <div className="relative h-full w-full flex-1 overflow-y-auto">
      <ProductList />
    </div>
  );
};

export default ProductsSection;
