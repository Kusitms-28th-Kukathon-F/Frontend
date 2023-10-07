import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankModalItem from './RankModalItem';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Axios from '../../apis';

const nowDate = {
  nowYear: new Date().getFullYear(),
  nowMonth: new Date().getMonth() + 1,
  startPeriodYear: '2023',
  endPeriodYear: '2023',
  startPeriodMonth: '07',
  endPeriodMonth: '09',
};

const RankModal = ({ setIsModalOpen }) => {
  const [rankData, setRankData] = useState();
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const fetchMonthRankData = async () => {
    const userId = 1;
    try {
      const res = await Axios.get(`/tumblers/history/month/${userId}`, {
        params: {
          userId,
          period: `${date.year}${date.month < 10 ? '0' : ''}${date.month}`,
        },
      });
      setRankData(res?.data?.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchQuarterRankData = async () => {
    const userId = 1;
    try {
      const res = await Axios.get(`/tumblers/history/quarter/${userId}`, {
        params: {
          userId,
          startPeriod: `${nowDate.startPeriodYear}${nowDate.startPeriodMonth}`,
          endPeriod: `${nowDate.endPeriodYear}${nowDate.endPeriodMonth}`,
        },
      });
      setRankData(res?.data?.data);
    } catch (e) {
      console.error(e);
    }
  };

  const [selectedOption, setSelectedOption] = useState('monthly');

  const onClickBack = () => {
    setDate(prev => {
      const prevDate = { ...prev };

      if (prevDate.month === 1) {
        prevDate.year -= 1;
        prevDate.month = 12;
      } else prevDate.month -= 1;

      return prevDate;
    });
  };

  const onClickForward = () => {
    setDate(prev => {
      const prevDate = { ...prev };
      if (
        prevDate.year === nowDate.nowYear &&
        prevDate.month === nowDate.nowMonth
      )
        return prevDate;
      if (prevDate.month === 12) {
        prevDate.year += 1;
        prevDate.month = 1;
      } else prevDate.month += 1;

      return prevDate;
    });
  };

  const handleOptionChange = event => {
    setSelectedOption(event.target.value); // 라디오 버튼 선택 시 상태 업데이트
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (selectedOption === 'monthly') fetchMonthRankData();
    else fetchQuarterRankData();
  }, [date, selectedOption]);

  return (
    <Container>
      <RankWrapper>
        <Cover />
        {rankData?.length > 0 && (
          <Rank>
            <RankHeader>
              <RadioContainer>
                <label
                  style={{
                    color: selectedOption === 'monthly' ? '#5277ff' : '#444',
                  }}
                >
                  <input
                    type="radio"
                    name="radioGroup" // 같은 그룹으로 묶음
                    value="monthly"
                    checked={selectedOption === 'monthly'} // 체크 여부 확인
                    onChange={handleOptionChange}
                  />
                  월별
                </label>
                <label
                  style={{
                    color: selectedOption === 'quarterly' ? '#5277ff' : '#444',
                  }}
                >
                  <input
                    type="radio"
                    name="radioGroup" // 같은 그룹으로 묶음
                    value="quarterly"
                    checked={selectedOption === 'quarterly'} // 체크 여부 확인
                    onChange={handleOptionChange}
                  />
                  분기별
                </label>
              </RadioContainer>
              <AiOutlineClose
                onClick={handleCloseModal}
                style={{ fontSize: '20px', zIndex: '3', cursor: 'pointer' }}
              />
            </RankHeader>
            {selectedOption === 'monthly' && (
              <DateController>
                <IoIosArrowBack
                  style={{
                    fontSize: '24px',
                    color: '#5277FF',
                    cursor: 'pointer',
                  }}
                  onClick={onClickBack}
                />
                <NowDate>{`${date.year}년 ${date.month}월`}</NowDate>
                <IoIosArrowForward
                  style={{
                    fontSize: '24px',
                    color: '#5277FF',
                    cursor: 'pointer',
                  }}
                  onClick={onClickForward}
                />
              </DateController>
            )}
            {selectedOption === 'quarterly' && (
              <DateController>
                <NowDate>{`${nowDate.startPeriodYear}년 ${nowDate.startPeriodMonth}월 ~ ${nowDate.endPeriodYear}년 ${nowDate.endPeriodMonth}일`}</NowDate>
              </DateController>
            )}
            <RankItemContainer>
              {rankData.map((data, idx) => (
                <RankModalItem
                  {...data}
                  tumblerCount={
                    selectedOption === 'monthly'
                      ? data.tumblerCount
                      : data.tumblerAverage
                  }
                  key={data.depart}
                  rank={idx + 1}
                />
              ))}
            </RankItemContainer>
          </Rank>
        )}
      </RankWrapper>
    </Container>
  );
};

RankModal.propTypes = {
  setIsModalOpen: PropTypes.any,
};
export default RankModal;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;

  z-index: 3;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;

const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  padding: 50px;
  gap: 10px;

  border-radius: 0px 20px 20px 20px;
  background: #5277ff;
`;

const Rank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 800px;
  padding: 50px;
  gap: 40px;

  border-radius: 20px;
  background: #fff;
`;

const RankHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  gap: 12px;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const RankItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 320px;
  gap: 10px;

  overflow-y: scroll;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const DateController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NowDate = styled.pre`
  min-width: 203.38px;

  color: #000;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 43.2px; /* 120% */
  letter-spacing: -0.72px;
`;

const Cover = styled.div`
  position: absolute;
  left: 0;
  top: -57px;

  width: 329px;
  height: 57px;

  border-radius: 20px 20px 0px 0px;
  background: #5277ff;
`;
