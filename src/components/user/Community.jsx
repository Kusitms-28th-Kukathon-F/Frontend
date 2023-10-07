import { useState } from 'react';
import styled from 'styled-components';

const Community = () => {
  const [inputComment, setInputComment] = useState('');
  const [comments, setComments] = useState([
    {
      content: '어제 일회용품 쓴 사람 누구세요 ^^',
      createdAt: '16:11',
    },
    {
      content: '우리 텀블리 벌써 대리라니 ㅠㅠ',
      createdAt: '16:15',
    },
    {
      content: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
      createdAt: '16:18',
    },
  ]);

  const onChange = e => {
    setInputComment(e.target.value);
  };

  const onKeyDown = e => {
    if (e.key == 'Enter') {
      const createdAtHours = new Date().getHours();
      const createdAtMinutes = new Date().getMinutes();

      setComments(prev => [
        ...prev.slice(1),
        {
          content: inputComment,
          createdAt: `${createdAtHours}:${createdAtMinutes}`,
        },
      ]);
      setInputComment('');
    }
  };

  return (
    <Container>
      <Title>
        <pre>우리 회사 텀블리에게..</pre>
      </Title>

      <CommentContainer>
        {comments.map(({ content, createdAt }, idx) => (
          <Comment key={idx}>
            <Content>{content}</Content>
            <CreatedAt>{createdAt}</CreatedAt>
          </Comment>
        ))}
      </CommentContainer>

      <InputComment
        placeholder="텍스트를 입력해주세요."
        value={inputComment}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </Container>
  );
};

export default Community;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 30px;

  border-radius: 30px;
  background: #fff;
`;

const Title = styled.div`
  margin-bottom: 10px;

  pre {
    font-size: 24px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const InputComment = styled.input`
  display: flex;
  align-items: center;
  align-self: stretch;

  padding: 15px;
  gap: 8px;

  border: none;
  border-radius: 20px;
  background: #f7f7f7;

  color: #929292;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 5px;

  width: 100%;
  margin-bottom: 20px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  pre {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
  }
`;

const CreatedAt = styled.pre`
  color: #bababa;
`;

const Content = styled.pre`
  color: #000;
`;
