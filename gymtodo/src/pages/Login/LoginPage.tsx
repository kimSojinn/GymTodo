import styled from 'styled-components';
import { useState } from 'react';
import { CheckBar } from '../../components/common/Login/CheckBar';
import { Login } from '../../components/common/Login/Login';
import { SignUp } from '../../components/common/Login/SignUp';

export const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <SLoginPage>
      <CheckBar onToggle={handleToggle} />
      <div className="card-3d-wrap">
        <div className={`card-3d-wrapper ${!showLogin ? 'flipped' : ''}`}>
          <div className="card-front">
            <Login />
          </div>
          <div className="card-back">
            <SignUp />
          </div>
        </div>
      </div>
    </SLoginPage>
  );
};

const SLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  .card-3d-wrap {
    perspective: 1000px;
  }
  .card-3d-wrapper {
    width: 300px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.9s;
  }
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .card-back {
    transform: rotateY(180deg);
  }
  .flipped {
    transform: rotateY(180deg);
  }
`;
