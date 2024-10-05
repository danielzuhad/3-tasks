import PaginationTodo from "@/components/todo-list/components/pagination-todo";
import TodoListSection from "@/components/todo-list/components/todo-list-section";
import TodoForm from "@/components/todo-list/components/TodoForm";

const TodoList = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <TodoForm />

      <PaginationTodo />
      <TodoListSection />
    </div>
  );
};

export default TodoList;
