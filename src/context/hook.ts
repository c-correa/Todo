import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Auth Context must be used within a Auth Provider");
  }

  return context;
}
