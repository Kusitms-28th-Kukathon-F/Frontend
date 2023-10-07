import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const getImageUrl = num => `/images/landing/landing${num}.svg`;

const MainPage = () => {
  const navigate = useNavigate();

  const navToLogin = useCallback(() => {
    navigate('/login');
  }, []);

  return (
    <Container>
      <FirstPageContainer>
        <FirstPage>
          <ButtonContainer>
            <img src={getImageUrl(10)} alt="1" />
            <Button onClick={navToLogin}>
              <pre>우리 회사도 시작해보기</pre>
            </Button>
          </ButtonContainer>
          <img src={getImageUrl(1)} alt="1" />
        </FirstPage>
      </FirstPageContainer>
      <PageContainer background={'#fff'}>
        <img src={getImageUrl(2)} alt="1" />
      </PageContainer>
      <PageContainer background={'#fff'}>
        <img src={getImageUrl(3)} alt="1" />
      </PageContainer>
      <CenterPageContainer>
        <img src={getImageUrl(4)} alt="1" />
        <img src={getImageUrl(5)} alt="1" />
      </CenterPageContainer>
      <PageContainer background={'#EFF5FF'}>
        <img src={getImageUrl(6)} alt="1" />
      </PageContainer>
      <PageContainer background={'#fff'}>
        <img src={getImageUrl(7)} alt="1" />
      </PageContainer>
      <PageContainer background={'#5277FF'}>
        <img
          src={getImageUrl(8)}
          alt="1"
          onClick={navToLogin}
          style={{ cursor: 'pointer' }}
        />
      </PageContainer>
      <LastPageContainer background={'#fff'}>
        <img src={getImageUrl(9)} alt="1" />
      </LastPageContainer>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;

  width: 100%;

  img {
    max-width: 1240px;
  }
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background};

  width: 100%;
  padding: 100px 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CenterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-top: 100px;

  background: linear-gradient(
      1deg,
      rgba(255, 61, 0, 0.2) 1.12%,
      rgba(255, 215, 202, 0) 98.91%
    ),
    #ffe7e0;

  img {
    width: 100%;
    height: 100%;
    &:nth-child(2) {
      width: 50%;
      height: 80%;
    }
  }
`;

const FirstPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background};

  width: 100%;

  padding: 100px 0;

  max-width: 1240px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const FirstPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 80px;

  width: 100%;

  img {
    max-width: 1240px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 500px;
`;

const Button = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 17px 40px;
  justify-content: center;
  gap: 10px;

  cursor: pointer;

  border-radius: 40px;
  background: #5277ff;

  pre {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
`;

const LastPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background};

  width: 100%;

  padding-top: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;
