import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormattedMessage } from "react-intl";

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
    // const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
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

        <Button type="primary" htmlType="submit" className="login-form-button">
          <FormattedMessage id="recover" defaultMessage="Recover" />
        </Button>
      </Form>
    );
  }
}

const WrappedForgotForm = Form.create({ name: "forgot" })(ForgotForm);

export default WrappedForgotForm;
