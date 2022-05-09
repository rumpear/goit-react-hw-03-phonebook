import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins', 'Roboto';

  padding: 40px;
  width: 400px;
  margin: 50px auto;
  background-color: rgba(151, 151, 151, 0.1);
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.322) 0px 2px 8px 0px;
`;

export const TitlePhonebook = styled.h1`
  margin-bottom: 15px;
  font-size: 35px;
`;

export const TitleContacts = styled.h1`
  margin-bottom: 15px;
  font-size: 25px;
`;
