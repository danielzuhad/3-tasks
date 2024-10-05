"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTodoStore } from "@/store/todoStore";

const PaginationTodo = () => {
  const { setFilter, filter } = useTodoStore();

  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <Card className="flex items-center gap-x-5 p-3">
        <Button
          onClick={() => setFilter("all")}
          variant={filter === "all" ? "default" : "outline"}
          size={"sm"}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("completed")}
          variant={filter === "completed" ? "default" : "outline"}
          size={"sm"}
        >
          Completed
        </Button>
        <Button
          onClick={() => setFilter("pending")}
          variant={filter === "pending" ? "default" : "outline"}
          size={"sm"}
        >
          Pending
        </Button>
      </Card>
    </div>
  );
};

export default PaginationTodo;
