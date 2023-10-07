import styled from 'styled-components';
import Tumbly from '/images/reward-tumbly.svg';

const RewardData = [
  {
    remain: 'D-19',
    content: '11월 1등 리워드는 팀 커피이용권',
    iconUrl: '/images/coffee.svg',
  },
  {
    remain: 'D-121',
    content: '2023년 하반기 리워드는 외식 상품권',
    iconUrl: '/images/dish.svg',
  },
];

const Reward = () => {
  return (
    <Container>
      <FlexBox>
        {RewardData.map(({ remain, content, iconUrl }, idx) => (
          <RewardContainer key={idx}>
            <RewardImageWrapper>
              <img src={iconUrl} alt="coffee" />
            </RewardImageWrapper>
            <RemainDays>{remain}</RemainDays>
            <RewardText>{content}</RewardText>
          </RewardContainer>
        ))}
      </FlexBox>
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

  height: 100%;

  position: relative;
  z-index: 2;

  gap: 20px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85%;
`;

const RewardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 5px; */

  width: 50px;
  height: 50px;

  padding: 5px;

  border-radius: 18px;
  background: #faf5ee;

  img {
    width: 100%;
    height: 100%;
  }
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
