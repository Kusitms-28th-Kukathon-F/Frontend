import styled from 'styled-components';

const Total = () => {
  return (
    <Container>
      <TopTxt>이번 달 리포트</TopTxt>
      <TitleContainer>
        <TitleImg src="/icons/totalImg.svg" />
        <Title>10월 동안 F부서는...</Title>
      </TitleContainer>
      <UnderLine />
      <List>
        <ListItem>
          <ListTxt>
            <span>- 하루 평균 텀블러를</span>
            <ListTxtValue>2.5잔</ListTxtValue>
            <span>썼어요</span>
          </ListTxt>
        </ListItem>
        <ListItem>
          <ListTxt>
            <span>- 지난 달에 비해</span>
            <ListTxtValue>2%</ListTxtValue>
            <span>줄였어요</span>
          </ListTxt>
        </ListItem>
        <ListItem>
          <ListTxt>
            <span>- 지난 달에 비해</span>
            <ListTxtValue>2등</ListTxtValue>
            <span>올라갔어요</span>
          </ListTxt>
        </ListItem>
      </List>
      <Img src="/images/totalImg2.svg" />
    </Container>
  );
};

export default Total;

const Container = styled.div`
  position: relative;
  width: 50%;
  height: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ListTxt = styled.div`
  color: var(--greyscale-primary, #444);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.6px;
`;

const ListTxtValue = styled.span`
  margin: 0 5px;
  border-radius: 5px;
  background: #eaf2ff;
  padding: 2px 8px;

  color: #5277ff;
  font-weight: 700;
`;

const Img = styled.img`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 30%;
`;
