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
`;

const TopContainer = styled.div``;

const BottomContainer = styled.div``;
