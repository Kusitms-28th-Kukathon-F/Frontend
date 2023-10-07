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

const RankItem = ({ level, depart, percent, total }) => {
  return (
    <Container>
      <Profile>
        <img src={getImage(level)} alt="profile" />
      </Profile>
      <DepInfoContainer>
        <Title>{`${depart} 부서`}</Title>
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
};

export default RankItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;
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

const DepInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  pre {
    font-family: Pretendard;
    font-style: normal;
    line-height: normal;
  }
`;

const Title = styled.pre`
  font-size: 24px;
  font-weight: 700;
`;

const TumblyLevel = styled.pre`
  font-size: 20px;
  font-weight: 500;
`;

const TotalCount = styled.pre`
  color: #5277ff;
  font-size: 16px;
  font-weight: 700;
`;
