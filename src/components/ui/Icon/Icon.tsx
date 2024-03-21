import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 34px;
  height: 34px;
  margin-left: 10px;
`;

const IconSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: #FFFFFF;
`;

const Icon = () => {
  return (
    <IconWrapper>
      <IconSvg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#9E78CF"></path>
          <path d="M448 298.666667h128v426.666666h-128z" fill="#FFFFFF"></path>
          <path d="M298.666667 448h426.666666v128H298.666667z" fill="#FFFFFF"></path>
        </g>
      </IconSvg>
    </IconWrapper>
  );
};

export default Icon;
