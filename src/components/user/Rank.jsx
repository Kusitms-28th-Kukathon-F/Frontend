import styled from 'styled-components';
import RankItem from './RankItem';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import RankModal from './RankModal';
import PropTypes from 'prop-types';

const Rank = ({ rankList }) => {
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
        {rankList.map((data, idx) => (
          <RankItem {...data} key={data.deptName} rank={idx + 1} />
        ))}
      </RankItemContainer>
      {isModalOpen && <RankModal setIsModalOpen={setIsModalOpen} />}
    </Container>
  );
};

Rank.propTypes = {
  rankList: PropTypes.array,
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
