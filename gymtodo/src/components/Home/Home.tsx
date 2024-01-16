import styled from 'styled-components';

export const Home = () => {
  return (
    <SHome>
      <div className="layout">
        <div></div>
      </div>
    </SHome>
  );
};

const SHome = styled.div`
  .layout {
    background-color: #c4c3ca;
    width: 100%;
    height: 60%;
    max-width: 500px;
    overflow: hidden;
    border-radius: 1rem;
  }
`;
