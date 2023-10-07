import { useState } from 'react';
import Axios from '../apis';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { LoginState } from '../state/login';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useRecoilState(LoginState);

  const handleLogin = async e => {
    e.preventDefault();
    await Axios.post('users', {
      loginId,
      password,
    })
      .then(res => {
        console.log(res);
        const value = res.data.data;
        if (value.userRole === 'DEPARTMENT') navigate('/user');
        if (value.userRole === 'CAFE') navigate('/cafe');
        if (value.userRole === 'COMPANY') navigate('/');
        setLoginState({
          isLogin: true,
          userId: value.userId,
          userRole: value.userRole,
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <Container>
      <LoginImg src="/images/loginImg.svg" />
      <LoginContainer onSubmit={handleLogin}>
        <img
          src="/icons/logo.svg"
          style={{ marginBottom: '1rem', width: '150px' }}
        />
        <Title>로그인</Title>
        <InputTitle>아이디</InputTitle>
        <Input placeholder="ID" onChange={e => setLoginId(e.target.value)} />
        <InputTitle>비밀번호</InputTitle>
        <Input
          placeholder="영문,숫자,특수문자를 사용한 8~20자"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <LoginBtn>로그인</LoginBtn>
        <BtmContainer>
          <BtmBtn>회원가입</BtmBtn>
          <div
            style={{ width: '1px', height: '16px', backgroundColor: '#AAA' }}
          />
          <BtmBtn>비밀번호 찾기</BtmBtn>
        </BtmContainer>
      </LoginContainer>
      <LoginBg src="/images/loginBg.svg" />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  margin: auto;
  max-width: 1400px;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginImg = styled.img`
  width: 40%;
  margin-right: 20px;
  z-index: 50;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const LoginContainer = styled.form`
  width: 40%;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 25px;
  z-index: 50;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const Title = styled.div`
  color: var(--greyscale-primary, #444);
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.9px;
  margin-bottom: 50px;
`;

const InputTitle = styled.div`
  color: var(--greyscale-primary, #444);
  font-family: Pretendard;
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1.25px solid #ccc;
  background: #fff;
  margin-bottom: 1.5rem;

  color: #999;
  font-size: 16px;
  font-weight: 400;
`;

const LoginBtn = styled.button`
  width: 100%;
  padding: 10px 0;
  border-radius: 8px;
  background: #5277ff;
  margin-bottom: 1rem;

  color: var(--basic-white, #fff);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: center;
`;
const BtmContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BtmBtn = styled.button`
  color: var(--greyscale-primary, #444);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

const LoginBg = styled.img`
  width: 80%;
  position: absolute;
  bottom: 0px;
`;
