import React from "react";
import Layout from "../components/Layout";
import { FormattedMessage } from "react-intl";
import ForgotForm from "../components/ForgotForm";
import { StyledWrapperFullWidth } from "../components/Layout/style";
import { Alert } from "antd";

export default class ForgotPassword extends React.Component {
  componentDidMount() {
    this.setState({
      initialFormValue: localStorage.getItem("email") || "",
      submitted: false
    });
  }
  renderSubmittedSection = () => {
    return (
      <StyledWrapperFullWidth>
        <Alert
          message={
            <FormattedMessage
              id="info.recover"
              defaultMessage="We sent a new password to your email"
            />
          }
          type="success"
        />
      </StyledWrapperFullWidth>
    );
  };
  handleForgotFormSubmit = () => {
    this.setState({ submitted: true, initialFormValue: "" });
  };
  render() {
    if (!this.state) {
      return null;
    }
    const { submitted, initialFormValue } = this.state;
    return (
      <Layout>
        {submitted ? (
          this.renderSubmittedSection()
        ) : (
          <ForgotForm
            onSubmit={this.handleForgotFormSubmit}
            initialValue={initialFormValue}
          />
        )}
      </Layout>
    );
  }
}
