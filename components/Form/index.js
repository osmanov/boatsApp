import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator, intl } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
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
            <a className="login-form-forgot">
              <FormattedMessage
                id="password.forgot"
                defaultMessage="Forgot password"
              />
            </a>
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            <FormattedMessage id="signIn" defaultMessage="Sign In" />
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
