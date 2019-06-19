import "antd/dist/antd.css";
import React from "react";
import messages from "../../lang";
import { IntlProvider, FormattedMessage } from "react-intl";
import { addAppLocaleData } from "../../localeData";
addAppLocaleData();
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { StyledFormWrapper } from "./style";
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDF1wY_kMknsC-SE12j407cJb5G7_ULQBA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
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
          <SimpleMap />
          <StyledFormWrapper>{children}</StyledFormWrapper>
        </Wrapper>
      </IntlProvider>
    );
  }
}
