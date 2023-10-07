import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { LoginState } from '../../state/login';

const NavBar = () => {
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoginState(false);
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <Nav>
      <NavContainer onClick={() => console.log(loginState)}>
        <img
          src="/icons/logo.svg"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
        {loginState ? (
          <AuthContainer>
            <AuthBtn onClick={() => navigate('/user/report')}>
              마이리포트
            </AuthBtn>
            <div>/</div>
            <AuthBtn onClick={handleLogout}>로그아웃</AuthBtn>
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
