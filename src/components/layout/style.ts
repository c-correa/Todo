import styled from "styled-components";

export const StyledLayout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  padding: 0 2rem;
`;

export const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  align-self: flex-end;
  margin: 2rem 0;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  width: 100px;

  &:hover {
    background-color: #0056b3;
  }
`;
