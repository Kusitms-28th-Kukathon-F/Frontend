import styled from 'styled-components';
import RankItem from './RankItem';
import { IoIosArrowForward } from 'react-icons/io';

const RankData = [
  {
    level: 4,
    depart: '비즈니스',
    percent: 30,
    total: 86,
  },
  {
    level: 5,
    depart: '디자인',
    percent: 30,
    total: 86,
  },
  {
    level: 3,
    depart: '마케팅',
    percent: 30,
    total: 86,
  },
];

const Rank = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>랭킹</Title>
        <ViewDetail>
          <pre>상세보기</pre>
          <IoIosArrowForward style={{ color: '#BCBCBC' }} />
        </ViewDetail>
      </TitleContainer>
      <RankItemContainer>
        {RankData.map(data => (
          <RankItem {...data} key={data.depart} />
        ))}
      </RankItemContainer>
    </Container>
  );
};

export default Rank;

const Container = styled.div`
  display: flex;
  width: 100%;

  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;

  background: #fff;
  border-radius: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const Title = styled.pre`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const RankItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
  height: 100%;
  gap: 10px;
`;

const ViewDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  pre {
    color: #bcbcbc;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
