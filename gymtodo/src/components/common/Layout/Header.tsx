import styled from 'styled-components';

export const Header = () => {
  return (
    <SHeader>
      <h1 className="title">🏋🏻GymTodo🏋🏻</h1>
    </SHeader>
  );
};

const SHeader = styled.div`
  color: #c4c3ca;
`;
