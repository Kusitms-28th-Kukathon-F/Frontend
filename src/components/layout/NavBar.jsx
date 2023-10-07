import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const NavBar = () => {
  const [isLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <Nav>
      <NavContainer>
        <img
          src="/icons/logo.svg"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
        {isLogin ? (
          <AuthContainer>
            <AuthBtn onClick={() => navigate('/user/report')}>
              마이리포트
            </AuthBtn>
          </AuthContainer>
        ) : (
          <AuthContainer>
            <AuthBtn onClick={() => navigate('/login')}>로그인</AuthBtn>
            <div>/</div>
            <AuthBtn onClick={() => navigate('/login')}>회원가입</AuthBtn>
          </AuthContainer>
        )}
      </NavContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
`;

const NavContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthContainer = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.46px;

  display: flex;
  gap: 10px;
  align-items: center;
`;

const AuthBtn = styled.div`
  cursor: pointer;

  &:hover {
    color: #5277ff;
  }
`;
