import styled from 'styled-components';
import { Wrap } from '../../../styles/GlobalStyles';

const ContSecStyle = styled.section`
  ${Wrap}
  text-align: center;
  color: var(--main-grey-76);
`;

const HeaderStyle = styled.h1`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 30px;
  padding: 30px 0 40px 0;
  color: black;
`;

const InputFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 322px;
  margin: 0 auto;
  text-align: left;
  button {
    margin-top: 30px;
  }
  input {
    width: 322px;
    height: 33px;
    border: transparent;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 16px;
    outline: none;
    &:focus {
      border-bottom: 2px solid var(--point-green);
    }
  }
`;

export { ContSecStyle, HeaderStyle, InputFormStyle };
