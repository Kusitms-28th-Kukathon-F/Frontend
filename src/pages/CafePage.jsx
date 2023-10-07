import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import StarbucksLogo from '/images/starbucks.svg';
import KeyPad from '../components/cafe/KeyPad';

const CafePage = () => {
  return (
    <Container>
      <LoginImg src="/images/loginImg.svg" />
      <EarnContainer>
        <LogoContainer>
          <img src="/icons/logo.svg" style={{ width: '150px' }} />
          <IoMdClose style={{ fontSize: '20px', color: '#5277FF' }} />
          <img src={StarbucksLogo} alt="" style={{ width: '150px' }} />
        </LogoContainer>
        <Title>부서 고유번호를 입력해주세요. </Title>
        <KeyPadContainer>
          <KeyPad />
        </KeyPadContainer>
      </EarnContainer>
      <LoginBg src="/images/loginBg.svg" />
    </Container>
  );
};

export default CafePage;

const Container = styled.div`
  margin: auto;
  max-width: 1400px;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginImg = styled.img`
  width: 40%;
  margin-right: 20px;
  z-index: 50;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const KeyPadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  border-radius: 20px;
  background: linear-gradient(0deg, #eaf2ff 0%, #eaf2ff 100%), #fff;
`;

const EarnContainer = styled.form`
  width: 40%;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  z-index: 50;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const Title = styled.div`
  color: var(--greyscale-primary, #444);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.9px;
  margin-bottom: 50px;
  margin-top: 20px;
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
