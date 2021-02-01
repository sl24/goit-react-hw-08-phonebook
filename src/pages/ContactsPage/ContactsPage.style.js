import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  border-radius: 30px;
  background-color: rgba(128, 224, 253, 1);
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 768px) {
    width: 380px;
    padding: 10px 10px;
    text-align: center;
  }
`;

const MainTitle = styled.h1`
  margin: 10px auto;
  text-align: center;
  color: #000000;
`;

const ContactTitle = styled.h2`
  margin: 20px auto 10px;
  text-align: center;
  font-size: 32px;
  color: #000000;
`;

export { Container, MainTitle, ContactTitle };
