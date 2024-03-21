export interface Action<P, T> {
  type: P;
  payload?: T;
}

export enum AUTH_ACTION {
  SET_TOKEN = "SET_TOKEN",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_ALL_TODOS = "SET_ALL_TODOS",
  ADD_TASK = "ADD_TASK",
  SET_RESET_CONTEXT = "SET_RESET_CONTEXT",
}

export interface IAuthPayload {
  token: string | null;
  isAuthenticated: boolean;
  todos: Task[];
  task: null;
}

export interface Task {
  id: number;
  user_id: number;
  is_done: boolean;
  title: string;
  description: string;
}

export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
  todos: Task[];
}

export interface IAuthDefault {
  state: IAuthState;
  dispatch: Dispatch;
}

export type Dispatch = React.Dispatch<
  Action<AUTH_ACTION, Partial<IAuthPayload>>
>;

export const initialState: IAuthState = {
  token: null,
  isAuthenticated: false,
  todos: [],
};
