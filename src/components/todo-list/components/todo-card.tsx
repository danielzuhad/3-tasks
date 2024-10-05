"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Todo, useTodoStore } from "@/store/todoStore";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const { deleteTodo, toggleTodo } = useTodoStore();

  const handleDeleteTodo = (id: string) => {
    try {
      deleteTodo(id);
      toast({
        title: "Todo deleted successfully",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Delete todo failed",
      });
    }
  };

  const handleUpdateTodo = (id: string) => {
    try {
      toggleTodo(id);
      toast({
        title: "Todo updated successfully",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "update todo failed",
      });
    }
  };

  return (
    <Card className="flex h-[150px] w-full flex-row justify-center py-5">
      <CardHeader className="flex w-full flex-col items-center justify-center p-0 px-2">
        <CardTitle className="line-clamp-1 text-base xl:text-lg 2xl:text-lg">
          {todo.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 w-full text-center text-xs lg:text-xs xl:text-xs">
          {todo.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex h-full w-full flex-col items-center justify-center gap-4 pb-0">
        <Button
          onClick={() => handleUpdateTodo(todo.id)}
          className={cn(
            "w-20 bg-white",
            todo.isCompleted
              ? "border border-green-300 text-green-700"
              : "border border-yellow-300 text-yellow-700",
          )}
          size={"sm"}
        >
          {todo.isCompleted ? "Completed" : "Pending"}
        </Button>
        <Button
          className="w-20"
          onClick={() => handleDeleteTodo(todo.id)}
          size={"sm"}
          variant={"destructive"}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
