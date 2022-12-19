export interface ITodo {
  id?: number;
  label: string;
  description: string;
  category: string;
  done: boolean;
}

export interface ITodoState {
  todos: Array<ITodo>;
  isLoading: boolean;
  error: string;
}
