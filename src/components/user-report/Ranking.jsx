import { useEffect, useState } from 'react';
import Axios from '../../apis';
import styled from 'styled-components';

const Ranking = () => {
  const [rankData, setRankData] = useState([]);

  const fetchRank = async () => {
    await Axios.get(`/tumblers/history/rank/1`, {
      params: {
        period: '202310',
      },
    })
      .then(res => {
        console.log(res);
        setRankData(
          res.data.data.map(el => [
            el.date,
            `${el.rank}등`,
            `${el.tumblerCount}잔`,
          ]),
        );
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchRank();
  }, []);

  return (
    <Container>
      <TopTxt>2023년 10월 기준</TopTxt>
      <TitleContainer>
        <TitleImg src="/icons/rankingImg.svg" />
        <Title>월별 랭킹</Title>
      </TitleContainer>
      <UnderLine />
      <ContentTable>
        <thead>
          <tr>
            <ContentHeader style={{ width: '33%' }}>년도/월</ContentHeader>
            <ContentHeader style={{ width: '33%' }}>지난 랭킹</ContentHeader>
            <ContentHeader style={{ width: '33%' }}>잔수</ContentHeader>
          </tr>
        </thead>
        <tbody>
          {rankData?.map((el, idx) => (
            <tr id={idx} key={idx}>
              {el?.map((element, index) => (
                <TableCell key={index}>{element}</TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </ContentTable>
    </Container>
  );
};

export default Ranking;

const Container = styled.div`
  width: 50%;
  height: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  background: #fff;
`;

const TopTxt = styled.div`
  color: var(--greyscale-tertiary, #aaa);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.4px;
  margin-bottom: 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.8rem;
`;

const TitleImg = styled.img`
  width: 24px;
`;

const Title = styled.div`
  color: var(--greyscale-primary, #444);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: var(--greyscale-divider, #e2e2e2);
  margin-bottom: 1.5rem;
`;

const ContentTable = styled.table`
  width: 100%;
  border-top: 3px solid #5277ff;
  color: var(--text-text-02, #555);
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
`;

const ContentHeader = styled.th`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--gray-gray-70, #dfdfdf);
  background: #e5ebff;
  font-weight: 700;
  color: #373737;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: -0.36px;
`;

const TableCell = styled.td`
  padding: 1rem 0;
  color: var(--text-text-01, #242424);
  border-bottom: 1px solid var(--gray-gray-70, #dfdfdf);
`;
