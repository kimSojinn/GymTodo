import styled from 'styled-components';

export const Navbar = () => {
  return (
    <SNavbar>
      <div className="layout">
        <h1 className="title">Todo</h1>
        <p>Today</p>
      </div>
    </SNavbar>
  );
};

const SNavbar = styled.div`
  background-color: #2a2b38;
  height: calc(100vh - 40px);
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: colunm;
  box-sizing: border-box;
  .title {
    text-align: left;
  }
`;
