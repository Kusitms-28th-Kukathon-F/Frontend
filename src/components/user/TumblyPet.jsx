import styled from 'styled-components';
import PropTypes from 'prop-types';

const position = ['', '인턴', '사원', '대리', '과장', '이사', '회장', ''];
const fontColor = [
  '',
  '#FF8C68',
  '#F05625',
  '#498441',
  '#5D5EA1',
  '#3D8EDA',
  '#31383E',
];

const TumblyPet = ({
  deptName,
  tumblerGrade,
  toGoalCount,
  tumblerName,
  tumblerPercent,
}) => {
  return (
    <Container>
      <img src={`/images/tumbly${tumblerGrade}.svg`} alt="tumbly" />

      <TumbyInfoContainer>
        <Hierarchy background={fontColor[tumblerGrade]}>
          <pre>{`${position[tumblerGrade]} 텀블리`}</pre>
        </Hierarchy>
        <Name>{`${tumblerName}`}</Name>
        <Department>{`${deptName} 부서`}</Department>
      </TumbyInfoContainer>

      <GageContainer>
        <Percentage percent={`${tumblerPercent}%`}>
          <pre>{tumblerPercent}</pre>
        </Percentage>
        <GageBar>
          <Gage width={`${tumblerPercent}%`} />
        </GageBar>

        <GageCaption>
          <pre>{`${position[tumblerGrade]} 텀블리`}</pre>
          <pre>{`${position[tumblerGrade + 1]} 텀블리`}</pre>
        </GageCaption>

        {tumblerGrade < 6 && (
          <RemainSign>
            <pre>{`${position[tumblerGrade + 1]}까지`}</pre>
            <pre>{`${toGoalCount}잔`}</pre>
            <pre>{'남았어요'}</pre>
          </RemainSign>
        )}
      </GageContainer>
    </Container>
  );
};

TumblyPet.propTypes = {
  deptName: PropTypes.string,
  tumblerGrade: PropTypes.number,
  toGoalCount: PropTypes.number,
  tumblerName: PropTypes.string,
  tumblerPercent: PropTypes.number,
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
    width: 100%;
    height: 100%;
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
  background: ${({ background }) => background};

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
    font-size: 16px;
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
    font-size: 16px;
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
