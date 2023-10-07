import styled from 'styled-components';
import Total from '../components/user-report/Total';
import Ranking from '../components/user-report/Ranking';
import Info from '../components/user-report/Info';
import DayGraph from '../components/user-report/DayGraph';
import MonthGraph from '../components/user-report/MonthGraph';

const UserReportPage = () => {
  return (
    <Container>
      <TopContainer>
        <Total />
        <Ranking />
      </TopContainer>
      <Info />
      <BottomContainer>
        <DayGraph />
        <MonthGraph />
      </BottomContainer>
    </Container>
  );
};

export default UserReportPage;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1240px;
  padding: 30px 0;

  gap: 30px;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
