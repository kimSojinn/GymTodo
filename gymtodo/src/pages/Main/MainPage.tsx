import styled from 'styled-components';
import { Navbar } from '../../components/common/Layout/Navbar';
import { Main } from '../../components/Main/Main';
// import { Header } from '../../components/common/Layout/Header';

export const MainPage = () => {
  return (
    <SMainpage>
      <Navbar />
      <Main />
      {/* <Header /> */}
    </SMainpage>
  );
};

const SMainpage = styled.div`
  display: flex;
  justify-content: center;
`;
