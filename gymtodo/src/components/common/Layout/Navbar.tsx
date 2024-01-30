import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = () => {
  const [active, setActive] = useState('');

  const handleClick = (path: string) => {
    setActive(path);
  };

  return (
    <SNavbar>
      <div className="layout">
        <h1 className="title">Todo</h1>
        <Link to="/main" onClick={() => handleClick('/main')}>
          오늘의 Todo
        </Link>
        <Link to="/list" onClick={() => handleClick('/list')}>
          운동 리스트
        </Link>
      </div>
    </SNavbar>
  );
};

const SNavbar = styled.div`
  background-color: #c4c3ca;
  height: calc(100vh - 60px);
  width: 15.625vw;
  margin: 30px;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .layout {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-size: 20px;
  }
  a:hover {
    color: #696969;
    background-color: #ffeba7;
    border-radius: 8px;
    height: 45px;
    // padding: 20px 0 0 10px;
  }
`;
