import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 400px;
  background-color: #1d1d1d;
  border-radius: 10px;
`;

export const LoginForm = styled.form`
  background: #252525;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
`;

export const InputField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
export const MessageError = styled.p`
  color: red;
`;
