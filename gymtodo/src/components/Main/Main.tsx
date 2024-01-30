import styled from 'styled-components';

export const Main = () => {
  return <SMain>Main</SMain>;
};

const SMain = styled.div`
  background-color: #2a2b38;
  color: #c4c3ca;
  height: calc(100vh - 60px);
  width: 39.063vw;
  margin: 30px;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: colunm;
  box-sizing: border-box;
`;
