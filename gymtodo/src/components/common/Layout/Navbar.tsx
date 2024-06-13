import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = () => {
  const [active, setActive] = useState('/main');
  const location = useLocation();
  const handleClick = (path: string) => {
    setActive(path);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <SNavbar>
      <div className="layout">
        <h1 className="title">Todo</h1>
        <Link
          to="/main"
          onClick={() => handleClick('/main')}
          className={active === '/main' ? 'active' : ''}
        >
          오늘의 Todo
        </Link>
        <Link
          to="/list"
          onClick={() => handleClick('/list')}
          className={active === '/list' ? 'active' : ''}
        >
          운동 리스트
        </Link>
      </div>
    </SNavbar>
  );
};

const SNavbar = styled.div`
  background-color: #2a2b38;
  color: #c4c3ca;
  height: calc(100vh - 100px);
  width: 15.625vw;
  margin: 30px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .layout {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 45px;
    transition:
      background-color 0.2s,
      color 0.2s;
  }
  a:hover,
  a.active {
    color: #2a2b38;
    background-color: #ffeba7;
    border-radius: 8px;
    height: 50px;
  }
`;
