import styled from 'styled-components';

export const Header = () => {
  return (
    <SHeader>
      <h1 className="title">GymTodo</h1>
    </SHeader>
  );
};

const SHeader = styled.div`
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
`;
