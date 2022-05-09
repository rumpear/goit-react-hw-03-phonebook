import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormBody = styled(Form)`
  width: 300px;
`;
export const Title = styled.p`
  font-size: 17px;
  margin-bottom: 10px;
`;
export const Input = styled(Field)`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 17px;
  border: 1px solid #eeeeee;
  width: 100%;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: auto;
  padding: 10px;

  margin-top: 5px;
  margin-bottom: 20px;

  background-color: #f5f4fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  font-family: inherit;
  font-size: 17px;
  font-weight: 500;

  text-align: center;
  border-radius: 4px;
  border: none;

  line-height: 1.87;
  letter-spacing: 0.06em;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :hover {
    background-color: rgba(77, 77, 77, 0.1);
  }
`;

export const Error = styled.div`
  text-align: center;
  font-size: 17px;
  margin-bottom: 10px;
  color: red;
`;
