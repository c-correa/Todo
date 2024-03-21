import styled from 'styled-components';

export const Input = styled.input`
  background: #1D1825;
  border: 1px solid #9E78CF;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; 
`;

export const Textarea = styled.textarea`
  background: #1D1825;
  border: 1px solid #9E78CF;
  color: white;
  padding: 10px 16px; 
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  flex: 1;
  margin-right: 10px;

`;

export const SubmitButton = styled.button`
  background: transparent;
  border: none;
  margin-right: 10px;

`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
