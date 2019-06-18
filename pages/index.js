import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import messages from "../lang";
import { IntlProvider, FormattedMessage } from "react-intl";
import { addAppLocaleData } from "../localeData";
addAppLocaleData();

export default class Home extends React.Component {
  componentDidMount() {
    const detectBrowserLanguage = require("detect-browser-language");
    this.setState({ locale: detectBrowserLanguage() });
  }

  render() {
    if (!this.state) return null;
    const { locale } = this.state;

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout>
          <Form />
        </Layout>
      </IntlProvider>
    );
  }
}
