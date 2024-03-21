import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction:column
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;
  color: #fff;/
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #1e90ff; /* Color de fondo del botón */
  border: none;
  border-radius: 5px;
  color: #fff; /* Color del texto */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;
