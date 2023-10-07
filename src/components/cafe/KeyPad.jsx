import styled from 'styled-components';
import Key from './Key';
import { useState } from 'react';
import Axios from '../../apis';
import { useNavigate } from 'react-router';

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '←', '0'];

const KeyPad = () => {
  const [inputNum, setInputNum] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [deptName, setDeptName] = useState('');

  const onClick = async () => {
    try {
      const res = await Axios.get(`/cafes/${6}`);
      if (res?.data?.status === 200) {
        setInputNum('');
        setIsSuccess(true);
        setDeptName(res?.data?.data?.deptName);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      {isSuccess ? (
        <SuccessContainer>
          <SuccessText>
            <pre>{deptName}부서</pre>
            <pre>에 적립이 완료되었습니다!</pre>
          </SuccessText>
          <img src={`/images/tumbly-success.svg`} alt="success" />
        </SuccessContainer>
      ) : (
        <>
          <ViewNumber>
            <pre>{inputNum}</pre>
          </ViewNumber>
          <KeyPadContainer>
            {keys.map(keyNum => (
              <Key setInputNumber={setInputNum} number={keyNum} key={keyNum} />
            ))}
            <OkayButton onClick={onClick}>
              <pre>확인</pre>
            </OkayButton>
          </KeyPadContainer>
        </>
      )}
    </Container>
  );
};

export default KeyPad;

const Container = styled.div`
  display: inline-flex;

  height: 403.08px;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30.75px;
`;

const KeyPadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    &:first-child {
      border-top-left-radius: 20px;
    }
    &:nth-child(3) {
      border-top-right-radius: 20px;
    }
    &:nth-child(10) {
      border-bottom-left-radius: 20px;
    }
    &:nth-child(12) {
      border-bottom-right-radius: 20px;
    }
  }
`;

const ViewNumber = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  padding: 16.5px 29.25px;
  justify-content: center;
  align-items: center;

  background: #fff;

  border-radius: 15px;
  border: 0.75px solid #d7d7d7;
  background: #fafafa;

  pre {
    color: #000;
    font-family: Pretendard;
    font-size: 31.5px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.26px;
  }
`;

const OkayButton = styled.div`
  display: flex;
  width: 33.3%;
  padding: 16.5px 29.25px;
  justify-content: center;
  align-items: center;
  gap: 7.5px;
  align-self: stretch;

  cursor: pointer;

  background: #5277ff;
  border: 0.75px solid #d7d7d7;

  pre {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.9px;
  }
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SuccessText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;

  pre {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -1.2px;

    &:first-child {
      color: #5277ff;
    }
    &:nth-child(2) {
      color: #000;
    }
  }
`;
