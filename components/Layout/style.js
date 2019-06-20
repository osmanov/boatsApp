import styled from "styled-components";
import { Form, Button } from "antd";
export const StyledFormWrapper = styled.div`
  position: absolute;
  top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const StyledForm = styled(Form)`
  background: #fff;
  width: 400px;
  padding: 15px;
  @media (max-width: 425px) {
    width: 100%;
  }
  border-radius: 3px;
  input {
    font-size: 16px;
  }
`;
export const StyledButton = styled(Button)`
  width: 100%;
`;
