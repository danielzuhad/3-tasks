"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useTodoList from "../useTodoList";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TodoForm = () => {
  const { todoForm, onSubmit } = useTodoList();

  return (
    <Card className="flex h-max w-full max-w-[600px] flex-col max-sm:pb-8 sm:flex-row">
      <CardHeader className="flex min-w-max items-center">
        <CardTitle className="text-xl xl:text-2xl 2xl:text-2xl">
          Todo Form
        </CardTitle>
        <CardDescription className="text-x1 text-muted-foreground sm:text-sm xl:text-xs">
          Form for creating new todos
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full p-8">
        <Form {...todoForm}>
          <form onSubmit={todoForm.handleSubmit(onSubmit)}>
            <FormField
              control={todoForm.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={todoForm.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel>Descripton</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Descripton" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4 w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TodoForm;
