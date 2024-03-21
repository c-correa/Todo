export interface TodoEditValues {
  title?: string;
  description?: string;
  is_done?: boolean;
}

export const INITIAL_VALUES = { title: "", description: "", is_done: false };

export interface TodoEditProps {
  todo: TodoEditValues;
}
