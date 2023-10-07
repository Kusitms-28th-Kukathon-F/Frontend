import styled from 'styled-components';
import { motion } from 'framer-motion';

const Info = () => {
  const imgSrc = [
    '/images/report1.svg',
    '/images/report2.svg',
    '/images/report3.svg',
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Container>
      <TitleContainer>
        <TitleImg src="/icons/infoImg.svg" />
        <Title>
          <span>F 부서가 모은</span>
          <BottleSpan>150잔</BottleSpan>
          <span>으로</span>
          <GramSpan>7800g</GramSpan>
          <span>의 온실가스 배출을 막았습니다.</span>
        </Title>
      </TitleContainer>
      <UnderLine />
      <ImgsContainer initial="hidden" animate="visible" variants={container}>
        {imgSrc.map((el, idx) => (
          <ImgWrapper key={idx} variants={item}>
            <Img src={el} />
          </ImgWrapper>
        ))}
      </ImgsContainer>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  background: #fff;
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
  line-height: 2rem;
`;

const BottleSpan = styled.span`
  margin: 0 5px;
  border-radius: 5px;
  background: #fff1ed;
  padding: 2px 8px;

  color: #ff6939;
  font-weight: 700;
`;
const GramSpan = styled.span`
  margin: 0 5px;
  border-radius: 5px;
  background: #eaf2ff;
  padding: 2px 8px;

  color: #5277ff;
  font-weight: 700;
`;
const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: var(--greyscale-divider, #e2e2e2);
  margin-bottom: 2rem;
`;

const ImgsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgWrapper = styled(motion.div)`
  width: 30%;
  height: 250px;
  border-radius: 20px;
  border: 1px solid #e2e2e2;
  background: #f3f8ff;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
