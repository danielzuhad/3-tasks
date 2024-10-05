import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}
interface TodoState {
  todos: Todo[];
  filter: "all" | "completed" | "pending";
  addTodo: (description: string, title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: "all" | "completed" | "pending") => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filter: "all",
      addTodo: (description, title) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: uuid(), title, description, isCompleted: false },
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "todo-storage",
    },
  ),
);
