import {
  PropsWithChildren,
  createContext,
  useMemo,
  useReducer,
} from "react";
import { IAuthDefault, initialState } from "./types";
import { reducer } from "./reducer";

const AuthContext = createContext<IAuthDefault>({
  state: initialState,
  dispatch: () => null,
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stateValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AuthContext.Provider value={stateValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };