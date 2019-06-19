import React from "react";
import Layout from "../components/Layout";
import { FormattedMessage } from "react-intl";
import ForgotForm from "../components/ForgotForm";

export default class ForgotPassword extends React.Component {
  componentDidMount() {
    this.setState({
      initialFormValue: localStorage.getItem("email") || "",
      submitted: false
    });
  }
  renderSubmittedSection = () => {
    return (
      <h1>
        <FormattedMessage
          id="info.recover"
          defaultMessage="We sent a new password to your email"
        />
      </h1>
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
