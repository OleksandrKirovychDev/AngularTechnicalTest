export interface ITodo {
  id: number;
  label: string;
  description: string;
  category: string;
  done: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
}
