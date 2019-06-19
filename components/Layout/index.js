import "antd/dist/antd.css";
import React from "react";
import messages from "../../lang";
import { IntlProvider, FormattedMessage } from "react-intl";
import { addAppLocaleData } from "../../localeData";
addAppLocaleData();

export default class Layout extends React.Component {
  componentDidMount() {
    const detectBrowserLanguage = require("detect-browser-language");
    this.setState({ locale: detectBrowserLanguage() });
  }

  render() {
    if (!this.state) return null;
    const { children } = this.props;
    const { locale } = this.state;

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    );
  }
}
