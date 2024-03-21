import "./App.css";
import { AuthContextProvider } from "./context";

import { AppRouter } from "./navigation";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
