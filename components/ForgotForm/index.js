import { Form, Icon, Input } from "antd";
import { FormattedMessage } from "react-intl";
import { StyledForm, StyledButton } from "../Layout/style";
class ForgotForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form, onSubmit } = this.props;
    form.validateFields(err => {
      if (!err) {
        onSubmit();
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      initialValue
    } = this.props;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("email", {
            initialValue,
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

        <StyledButton
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          <FormattedMessage id="recover" defaultMessage="Recover" />
        </StyledButton>
      </StyledForm>
    );
  }
}

const WrappedForgotForm = Form.create({ name: "forgot" })(ForgotForm);

export default WrappedForgotForm;
