import styled from 'styled-components';

const Field = styled.input`
  background: #1D1825;
  border: 1px solid #9E78CF;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;
  margin-right: -50px;

`;

const Input = ({ placeholder, name, type,value,onChange }) => {
  return <Field
  type={type}
  value={value}
  onChange={onChange}
  name={name} 
  placeholder={placeholder} />;
};

export default Input;
