import styled from 'styled-components';
import { Navbar } from '../../components/common/Layout/Navbar';
import { Main } from '../../components/Main/Main';

export const MainPage = () => {
  return (
    <SMainpage>
      <Main />
    </SMainpage>
  );
};

const SMainpage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section {
    display: flex;
    height: 100%;
  }
`;
