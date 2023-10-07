import styled from 'styled-components';
import Reward from './components/Reward';
import TumblyPet from './components/TumblyPet';
import Rank from './components/Rank';
import Community from './components/Community';

const Main = () => {
  return (
    <Container>
      <Reward />
      <MainContainer>
        <TumblyPet />
        <RightBox>
          <Rank />
          <Community />
        </RightBox>
      </MainContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  padding: 30px;

  gap: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-height: calc(100vh - 210px);
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30%;
  height: 100%;

  gap: 20px;
`;
