import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankModalItem from './RankModalItem';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

const nowDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

const RankModal = ({ setIsModalOpen }) => {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const [selectedOption, setSelectedOption] = useState('monthly');

  const [rankData] = useState([
    {
      level: 5,
      depart: 'F',
      percent: 30,
      name: '돈미새',
      total: 86,
    },
    {
      level: 5,
      depart: '디자인',
      percent: 30,
      name: '10만팔로워',
      total: 86,
    },
    {
      level: 3,
      depart: '마케팅',
      percent: 30,
      name: '거북목패밀리',
      total: 86,
    },
    {
      level: 3,
      depart: '마케팅',
      percent: 30,
      name: '거북목패밀리',
      total: 86,
    },
    {
      level: 3,
      depart: '마케팅',
      percent: 30,
      name: '거북목패밀리',
      total: 86,
    },
  ]);

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

  useEffect(() => {}, [date]);

  return (
    <Container>
      <RankWrapper>
        <Cover />
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
              <NowDate>{`${
                nowDate.month - 3 > 0 ? nowDate.year : nowDate.year - 1
              }년 ${
                nowDate.month - 3 > 0
                  ? nowDate.month - 3
                  : 12 - (3 - nowDate.month)
              }월 ~ ${nowDate.year}년 ${nowDate.month}일`}</NowDate>
            </DateController>
          )}
          <RankItemContainer>
            {rankData.map((data, idx) => (
              <RankModalItem {...data} key={data.depart} rank={idx + 1} />
            ))}
          </RankItemContainer>
        </Rank>
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
