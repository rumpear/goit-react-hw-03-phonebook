import styled from 'styled-components';

export const List = styled.ul`
  font-size: 17px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Item = styled.li`
  font-size: 17px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p``;

export const Button = styled.button`
  display: inline-flex;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  background-color: #f5f4fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  text-align: center;
  border-radius: 50%;
  border: none;

  line-height: 1.87;
  letter-spacing: 0.06em;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :hover {
    background-color: rgba(77, 77, 77, 0.1);
  }
`;
