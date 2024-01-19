import styled from 'styled-components';
import { Header } from '../../components/common/Layout/Header';
import { MainContent } from '../../components/Home/MainContent';

export const MainContentPage = () => {
  return (
    <SMainContentpage>
      <Header />
      <MainContent />
    </SMainContentpage>
  );
};

const SMainContentpage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
