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

const RankItem = ({ level, depart, percent, total, name, rank }) => {
  return (
    <Container>
      <Profile>
        <img src={getImage(level)} alt="profile" />
        <Ranking>
          <pre>{rank}</pre>
        </Ranking>
      </Profile>
      <DepInfoContainer>
        <FlexBox>
          <Title>{`${depart} 부서`}</Title>
          <Name>{name}</Name>
        </FlexBox>
        <TumblyLevel>
          {getTumblyName(level)} 텀블리 {`(현재 ${percent}%)`}
        </TumblyLevel>
        <TotalCount>{`누적 ${total}잔`}</TotalCount>
      </DepInfoContainer>
    </Container>
  );
};

RankItem.propTypes = {
  level: PropTypes.number,
  depart: PropTypes.string,
  percent: PropTypes.number,
  total: PropTypes.number,
  name: PropTypes.string,
  rank: PropTypes.number,
};

export default RankItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
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

const DepInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 5px;

  pre {
    font-family: Pretendard;
    font-style: normal;
    line-height: normal;
  }
`;

const Title = styled.pre`
  font-size: 17px;
  font-weight: 700;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const Name = styled.pre`
  color: #9b9b9b;
  font-size: 14px;
`;

const TumblyLevel = styled.pre`
  font-size: 15px;
  font-weight: 500;
`;

const TotalCount = styled.pre`
  color: #5277ff;
  font-size: 15px;
  font-weight: 700;
`;
