"use client";

import { useTodoStore } from "@/store/todoStore";
import LayoutTodoList from "../layout/layout-todo-list";
import TodoCard from "./todo-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const TodoListSection = () => {
  const { todos, filter } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.isCompleted;
    if (filter === "pending") return !todo.isCompleted;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="mt-10">
        {filter === "all" ? (
          <h1 className="text-center text-2xl font-bold">No Todos</h1>
        ) : (
          <h1 className="text-center text-2xl font-bold">No {filter} Todo</h1>
        )}
      </div>
    );
  }

  return (
    <ScrollArea className="mt-10 w-full flex-1 overflow-y-auto overflow-x-hidden lg:max-h-[39vh]">
      <LayoutTodoList>
        {filteredTodos.map((todo, i) => (
          <TodoCard key={i} todo={todo} />
        ))}
      </LayoutTodoList>
    </ScrollArea>
  );
};

export default TodoListSection;
