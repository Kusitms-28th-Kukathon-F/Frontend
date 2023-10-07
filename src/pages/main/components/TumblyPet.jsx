import { useState } from 'react';
import styled from 'styled-components';

const TumblyPet = () => {
  const getImage = level => `/images/tumbly${level}.svg`;

  const [rate] = useState('37%');

  return (
    <Container>
      <img src={getImage(1)} alt="tumbly" />

      <TumbyInfoContainer>
        <Hierarchy>
          <pre>{'인턴 텀블리'}</pre>
        </Hierarchy>
        <Name>{'멋쨍이 토마툐'}</Name>
        <Department>{'DA 부서'}</Department>
      </TumbyInfoContainer>

      <GageContainer>
        <Percentage percent={rate}>
          <pre>{rate}</pre>
        </Percentage>
        <GageBar>
          <Gage width={rate} />
        </GageBar>

        <GageCaption>
          <pre>{'인턴 텀블리'}</pre>
          <pre>{'사원 텀블리'}</pre>
        </GageCaption>

        <RemainSign>
          <pre>{'사원까지'}</pre>
          <pre>{'190잔'}</pre>
          <pre>{'남았어요'}</pre>
        </RemainSign>
      </GageContainer>
    </Container>
  );
};

export default TumblyPet;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 50px;

  border-radius: 30px;
  background-color: #fff;

  gap: 32px;

  img {
    width: 60%;
    height: 60%;
  }
`;

const TumbyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  gap: 10px;
`;

const Hierarchy = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 40px;
  gap: 10px;

  border-radius: 100px;
  background: #5277ff;

  pre {
    color: #fff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

const Name = styled.pre`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Department = styled.pre`
  color: #bcbcbc;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const GageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 100%;
  gap: 12px;
`;

const GageBar = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 100%;
  height: 17px;

  border-radius: 100px;
  background: #e2e2e2;
`;

const Gage = styled.div`
  width: ${({ width }) => width};
  height: 100%;

  border-radius: 100px;
  background: linear-gradient(90deg, #5277ff 19.08%, #ff8c68 137.61%);
`;

const Percentage = styled.div`
  width: 100%;

  pre {
    margin-left: ${({ percent }) => percent};

    color: #5277ff;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

const GageCaption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  pre {
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:first-child {
      color: #5277ff;
    }
    &:last-child {
      color: #d9d9d9;
    }
  }
`;

const RemainSign = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  bottom: 100px;

  padding: 12px;
  gap: 5px;

  border-radius: 12px;
  background: #454450;

  pre {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;

    &:nth-child(2) {
      color: #ff8c68;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 90%;
    margin-left: -10px; /* Adjust this value to position the triangle */
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #454450 transparent transparent transparent;
  }
`;
