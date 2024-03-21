import { PropsWithChildren, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { HomeTodo, Login } from "../pages";
import { Layout } from "..";

function ProtectedRoute(props: PropsWithChildren) {
  const { state } = useContext(AuthContext);

  return state.isAuthenticated ? (
    <>{props.children}</>
  ) : (
    <Navigate to="/login" replace />
  );
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/todo"
        element={
          // <ProtectedRoute>
            <Layout>
              <HomeTodo />
            </Layout>
          // </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
