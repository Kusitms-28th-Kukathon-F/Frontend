import styled from 'styled-components';
import RankItem from './RankItem';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import RankModal from './RankModal';

const RankData = [
  {
    level: 5,
    depart: 'F',
    percent: 30,
    total: 313,
    name: '에프지마 지구야',
  },
  {
    level: 4,
    depart: 'E',
    percent: 14,
    total: 201,
    name: 'e편한세상',
  },
  {
    level: 3,
    depart: 'H',
    percent: 96,
    total: 190,
    name: '하이팀',
  },
];

const Rank = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>랭킹</Title>
        <ViewDetail onClick={onClick}>
          <pre>상세보기</pre>
          <IoIosArrowForward style={{ color: '#BCBCBC' }} />
        </ViewDetail>
      </TitleContainer>
      <RankItemContainer>
        {RankData.map((data, idx) => (
          <RankItem {...data} key={data.depart} rank={idx + 1} />
        ))}
      </RankItemContainer>
      {isModalOpen && <RankModal setIsModalOpen={setIsModalOpen} />}
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
