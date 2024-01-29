import styled from 'styled-components';

export const Navbar = () => {
  return (
    <SNavbar>
      <div className="layout">
        <h1 className="title">Todo</h1>
        <p>오늘의 Todo</p>
      </div>
    </SNavbar>
  );
};

const SNavbar = styled.div`
  background-color: #c4c3ca;
  height: calc(100vh - 60px);
  width: 400px;
  margin: 30px;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: colunm;
  gap: 20px;
  box-sizing: border-box;
  .title {
    text-align: left;
    margin-bottom: 20px;
  }
`;
