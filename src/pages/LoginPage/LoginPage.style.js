import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  background-color: rgba(128, 224, 253, 0.3);
  border-radius: 10px;
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 768px) {
    width: 380px;
    padding: 30px 30px;
  }
`;

const Form = styled.form`
  display: block;
  margin-bottom: 10px;
  text-align: center;
`;

const LabelForm = styled.label`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

const InputForm = styled.input`
  display: block;
  margin: 20px auto;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 30px;

  &::placeholder {
    padding-left: 10px;
    font-size: 18px;
  }
`;

const Button = styled.button`
  outline: none;
  padding: 12px 40px;
  margin: 10px 5px;
  border-radius: 30px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

const Error = styled.div`
  color: #eb5216;
  font-weight: bold;
  line-height: 30px;
  padding: 20px 16px 0;
  font-size: 22px;
  text-align: center;
  margin-bottom: 16px;
`;

export { Container, Form, LabelForm, InputForm, Button, Error };
