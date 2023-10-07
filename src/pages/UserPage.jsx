import styled from 'styled-components';
import Reward from '../components/user/Reward';
import TumblyPet from '../components/user/TumblyPet';
import Rank from '../components/user/Rank';
import Community from '../components/user/Community';
import Axios from '../apis';
import { useEffect, useState } from 'react';

const UserPage = () => {
  const userId = 1;

  const [mainData, setMainData] = useState();

  const fetchMainData = async () => {
    try {
      const res = await Axios.get(`tumblers/current/${userId}`, {
        params: {
          userId,
        },
      });
      setMainData(res?.data?.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMainData();
  }, []);

  return (
    <Container>
      {mainData && (
        <>
          <Reward />
          <MainContainer>
            <TumblyPet {...mainData} />
            <RightBox>
              <Rank rankList={mainData?.rankList.slice(0, 3)} />
              <Community />
            </RightBox>
          </MainContainer>
        </>
      )}
    </Container>
  );
};

export default UserPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1240px;
  margin: auto;
  height: calc(100vh -50px);

  padding: 30px;

  gap: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 30px;
  height: calc(100vh - 260px);
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30%;
  height: 100%;

  gap: 20px;
`;
