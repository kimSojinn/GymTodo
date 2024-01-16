import styled from 'styled-components';
import { Home } from '../../components/Home/Home';
import { Header } from '../../components/common/Layout/Header';

export const HomePage = () => {
  return (
    <SHomepage>
      <Header />
      <Home />
    </SHomepage>
  );
};

const SHomepage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
