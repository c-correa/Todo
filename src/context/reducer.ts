import {
  AUTH_ACTION,
  Action,
  IAuthPayload,
  IAuthState,
  Task,
  initialState,
} from "./types";

export const reducer = (
  state: IAuthState,
  action: Action<AUTH_ACTION, Partial<IAuthPayload>>
): IAuthState => {
  switch (action.type) {
    case AUTH_ACTION.SET_TOKEN:
      return { ...state, token: action.payload?.token || null };
    case AUTH_ACTION.SET_IS_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload?.isAuthenticated || false,
      };
    case AUTH_ACTION.SET_ALL_TODOS:
      return { ...state, todos: action.payload?.todos ?? [] };

    case AUTH_ACTION.ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action?.payload?.task ?? ({} as Task)],
      };

    case AUTH_ACTION.SET_RESET_CONTEXT:
      return initialState;
    default:
      return state;
  }
};
