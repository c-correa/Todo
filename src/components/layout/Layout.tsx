import { LogoutButton, StyledLayout } from ".";
import { useUser } from "../..";

export function Layout({ children }) {
  const {logout} = useUser()
  return (
    <StyledLayout>
      <LogoutButton onClick={logout}>
        Logout
      </LogoutButton>
      {children}
    </StyledLayout>
  );
}
