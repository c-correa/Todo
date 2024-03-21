import styled from "styled-components";

export const Card = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px;
  margin-left: 20px;
  height: auto

`;

export const TaskCard = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskCardDone = styled.div`
border-radius:10px;
background: #87CE00;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div:first-child h4,p {
    text-decoration: line-through;
  color:black
  }
`;

export const IconButton = styled.img`
  cursor: pointer;
`;
