import "antd/dist/antd.css";
import React from "react";
import messages from "../../lang";
import { IntlProvider } from "react-intl";
import styled from "styled-components";
import Head from "next/head";
import { StyledFormWrapper } from "./style";
import GoogleMap from "../GoogleMap";
import { addAppLocaleData } from "../../localeData";
addAppLocaleData();

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

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
        <Wrapper>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <GoogleMap />
          <StyledFormWrapper>{children}</StyledFormWrapper>
        </Wrapper>
      </IntlProvider>
    );
  }
}
