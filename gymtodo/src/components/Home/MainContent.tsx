import styled from 'styled-components';
import { Navbar } from '../common/Layout/Navbar';

export const MainContent = () => {
  return (
    <SMainContent>
      <div className="navbar">
        <Navbar />
      </div>
    </SMainContent>
  );
};

const SMainContent = styled.div`
  display: flex;
  .navbar {
    display: flex;
    justify-content: flex-start;
  }
`;
