import { useCallback } from "react";
import { LoginValues } from "../pages";
import { authentication, getAllTasks } from "..";
import { useAuthContext } from "../context";
import { AUTH_ACTION } from "../context/types";
import { useNavigate } from "react-router-dom";

export function useUser() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = useCallback(
    async (values: LoginValues) => {
      const data = await authentication(values);

      if (data) {
        localStorage.setItem("token", data.accessToken);
        // guardo la info del usuario para acceder a ella ya que no tengo un endpoint de profile
        localStorage.setItem("user", data.user.email);
        dispatch({
          type: AUTH_ACTION.SET_IS_AUTH,
          payload: { isAuthenticated: true },
        });
        dispatch({
          type: AUTH_ACTION.SET_TOKEN,
          payload: { token: data.accessToken },
        });
        navigate("/todo", { replace: true });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const getAllTodos = useCallback(async () => {
    try {
      const record = await getAllTasks();

      if (record) {
        const data = record;
        dispatch({
          type: AUTH_ACTION.SET_ALL_TODOS,
          payload: { todos: data },
        });
      }
      return record;
    } catch (error) {
      console.error("Error al obtener todos:", error);
    }
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch({ type: AUTH_ACTION.SET_RESET_CONTEXT });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });

  }, [dispatch, navigate]);

  return {
    login,
    logout,
    getAllTodos,
  };
}
