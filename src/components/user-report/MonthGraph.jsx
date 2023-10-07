import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line';

const MonthGraph = () => {
    const data = [
        {
          id: '잔 수',
          color: '#5277FF',
          data: [
            {
              x: '5월',
              y: 150,
            },
            {
              x: '6월',
              y: 180,
            },
            {
              x: '7월',
              y: 220,
            },
            {
              x: '8월',
              y: 80,
            },
            {
              x: '9월',
              y: 200,
            },
            {
              x: '10월',
              y: 280,
            },
          ],
        },
      ];
  return (
    <Container>
      <TitleContainer>
        <TitleLeft>
        <TitleImg src="/icons/monthGraphImg.svg" />
        <Title>지금까지 얼마나 아꼈을까요?</Title>

        </TitleLeft>
        <SubTitle>분기 기준</SubTitle>
      </TitleContainer>
      <div style={{ width: '100%', height: '250px', margin: '0' }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 10, right: 15, bottom: 25, left: 30 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: '0',
            max: '300',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="natural"
          colors="#FF8C68"
          enableSlices="x"
          // axis 설정
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          // 포인트 설정
          pointSize={5}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          // 그리드 설정
          enableGridX={true}
          enableGridY={false}
        />
      </div>
    </Container>
  );
};

export default MonthGraph;

const Container = styled.div`
  width: 50%;
  height: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  background: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.8rem;
`;

const TitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const SubTitle = styled.div`
  color: var(--greyscale-tertiary, #aaa);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.4px;
`;
