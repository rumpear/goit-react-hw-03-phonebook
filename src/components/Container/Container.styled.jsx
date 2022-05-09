import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: block; */

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;

    padding: 50px 15px;
  }

  @media (min-width: 769px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  max-width: 480px;
  /* text-align: center; */
`;
