import { Form, Icon, Input, Checkbox } from "antd";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import styled from "styled-components";
import { StyledForm, StyledButton } from "../Layout/style";
const StyledA = styled.a`
  float: right;
`;
class SignInForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form, onSubmit } = this.props;
    form.validateFields((err, values) => {
      onSubmit(err, values);
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldError,
      isFieldTouched,
      getFieldValue
    } = this.props.form;
    const emailError = isFieldTouched("email") && getFieldError("email");
    if (!emailError) {
      const emailValue = getFieldValue("email");
      emailValue && localStorage.setItem("email", emailValue);
    }

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: (
                  <FormattedMessage
                    id="error.email"
                    defaultMessage="The input is not valid E-mail!"
                  />
                )
              },
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="error.require"
                    defaultMessage="Required"
                  />
                )
              }
            ]
          })(<Input prefix={<Icon type="mail" />} />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="error.require"
                    defaultMessage="Required"
                  />
                )
              }
            ]
          })(<Input prefix={<Icon type="lock" />} type="password" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(
            <Checkbox>
              <FormattedMessage id="remember" defaultMessage="Remember me" />
            </Checkbox>
          )}

          <Link href={`/forgot-password`}>
            <StyledA>
              <FormattedMessage
                id="password.forgot"
                defaultMessage="Forgot password"
              />
            </StyledA>
          </Link>
          <StyledButton type="primary" htmlType="submit">
            <FormattedMessage id="signIn" defaultMessage="Sign In" />
          </StyledButton>
        </Form.Item>
      </StyledForm>
    );
  }
}

const WrappedSignInForm = Form.create({ name: "normal_login" })(SignInForm);

export default WrappedSignInForm;
