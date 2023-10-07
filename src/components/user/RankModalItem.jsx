import styled from 'styled-components';
import PropTypes from 'prop-types';

const getImage = level => `/images/tumbly-profile${level}.svg`;

const getTumblyName = level => {
  switch (level) {
    case 1:
      return '인턴';
    case 2:
      return '사원';
    case 3:
      return '대리';
    case 4:
      return '과장';
    case 5:
      return '이사';
    case 6:
      return '사장';
  }
};

const RankModalItem = ({
  tumblerName,
  deptName,
  tumblerGrade,
  tumblerPercent,
  tumblerCount,
  rank,
}) => {
  return (
    <Container>
      <FlexBox>
        <Profile>
          <img src={getImage(tumblerGrade)} alt="profile" />
          <Ranking>
            <pre>{rank}</pre>
          </Ranking>
        </Profile>
        <DepInfoContainer>
          <Title>{`${deptName} 부서`}</Title>
          <TumblyLevel>
            {getTumblyName(tumblerGrade)} 텀블리 {`(현재 ${tumblerPercent}%)`}
          </TumblyLevel>
          <Name>{tumblerName}</Name>
        </DepInfoContainer>
      </FlexBox>
      <TotalCount>{`총 ${tumblerCount ? tumblerCount : 0}잔`}</TotalCount>
    </Container>
  );
};

RankModalItem.propTypes = {
  tumblerGrade: PropTypes.number,
  deptName: PropTypes.string,
  tumblerPercent: PropTypes.number,
  tumblerName: PropTypes.string,
  tumblerCount: PropTypes.number,
  rank: PropTypes.number,
};

export default RankModalItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;

  width: 100%;
`;

const Profile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;

  border: 1px solid #e3e3e3;
  background: #edf4ff;

  position: relative;

  img {
    width: 100%;
    height: 100%;

    padding: 10px 10px 0;
  }
`;

const Ranking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;

  position: absolute;
  bottom: 0;
  left: 0;

  border-radius: 4px;
  border-bottom-left-radius: 12px;
  background: #ff8c68;

  pre {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: -0.6px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;

const DepInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;

  pre {
    font-family: Pretendard;
    font-style: normal;
    line-height: normal;
  }
`;

const Title = styled.pre`
  font-size: 20px;
  font-weight: 700;
`;

const TumblyLevel = styled.pre`
  font-size: 16px;
  font-weight: 500;
`;

const Name = styled.pre`
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -1.2px;
`;

const TotalCount = styled.pre`
  color: #5277ff;
  font-size: 16px;
  font-weight: 700;
`;
