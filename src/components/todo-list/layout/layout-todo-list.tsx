interface LayoutTodoListProps {
  children?: React.ReactNode;
}

const LayoutTodoList = ({ children }: LayoutTodoListProps) => {
  return (
    <div className="mt-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {children}
    </div>
  );
};

export default LayoutTodoList;
