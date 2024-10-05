import { todoSchema, TodoSchemaType } from "@/schema/todoSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTodoStore } from "@/store/todoStore";
import { useToast } from "@/hooks/use-toast";

const useTodoList = () => {
  const { addTodo } = useTodoStore();
  const { toast } = useToast();

  const todoForm = useForm<TodoSchemaType>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      description: "",
      title: "",
    },
  });

  const onSubmit = (data: TodoSchemaType) => {
    try {
      addTodo(data.description, data.title);

      todoForm.reset();

      toast({
        title: "Success added",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed added",
      });
    }
  };

  return { todoForm, onSubmit };
};

export default useTodoList;
