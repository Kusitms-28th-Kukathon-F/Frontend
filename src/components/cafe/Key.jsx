import styled from 'styled-components';
import PropTypes from 'prop-types';

const Key = ({ setInputNumber, number }) => {
  const onClick = () => {
    if (number === '←') {
      setInputNumber(prev => prev.slice(0, prev.length - 1));
    } else {
      setInputNumber(prev => prev + number);
    }
  };
  return (
    <Container onClick={onClick}>
      <KeyNum>{number}</KeyNum>
    </Container>
  );
};

Key.propTypes = {
  setInputNumber: PropTypes.any,
  number: PropTypes.string,
};

export default Key;

const Container = styled.div`
  display: flex;
  width: 33.3%;
  padding: 16.5px 29.25px;
  justify-content: center;
  align-items: center;
  gap: 7.5px;
  align-self: stretch;

  border: 0.75px solid #d7d7d7;
  background: #fff;

  cursor: pointer;
`;

const KeyNum = styled.pre`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.9px;
`;
