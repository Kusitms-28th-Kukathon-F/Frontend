import styled from 'styled-components';
import CoffeeImage from '/images/coffee.svg';
import Tumbly from '/images/reward-tumbly.svg';

const RewardData = [
  {
    remain: 'D-19',
    content: '11월 1등 리워드는 팀 커피이용권',
  },
  {
    remain: 'D-121',
    content: '2023년 하반기 리워드는 크루즈 여행권',
  },
];

const Reward = () => {
  return (
    <Container>
      {RewardData.map(({ remain, content }, idx) => (
        <RewardContainer key={idx}>
          <RewardImageWrapper>
            <img src={CoffeeImage} alt="coffee" />
          </RewardImageWrapper>
          <RemainDays>{remain}</RemainDays>
          <RewardText>{content}</RewardText>
        </RewardContainer>
      ))}
      <ImageWrapper>
        <img
          src={Tumbly}
          alt="tumbly"
          style={{ borderBottomRightRadius: '30px' }}
        />
      </ImageWrapper>
    </Container>
  );
};

export default Reward;

const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  height: 120px;
  padding: 15px 30px;
  gap: 100px;
  flex-shrink: 0;

  border-radius: 30px;
  background-color: #fff;
`;

const RewardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 2;

  gap: 20px;
`;

const RewardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  border-radius: 18px;
  background: #faf5ee;
`;

const RemainDays = styled.pre`
  color: #a0a0a0;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
`;

const RewardText = styled.pre`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  img {
    width: 250px;
  }
`;
