import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Point = styled.div`
  color: white;
  background: orange;
  padding: 15px 10px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translate(-50%, -50%);
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
const KEY = "AIzaSyDF1wY_kMknsC-SE12j407cJb5G7_ULQBA";
export default class GoogleMap extends React.Component {
  static defaultProps = {
    zoom: 11
  };
  state = {
    lat: 59.95,
    lng: 30.33,
    text: "Kreyser Avrora"
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          text: "your location"
        });
      },
      error => console.log(error)
    );
  }
  render() {
    const { zoom } = this.props;
    const { lat, lng, text } = this.state;
    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
          center={{ lat, lng }}
        >
          <Point lat={lat} lng={lng}>
            {text}
          </Point>
        </GoogleMapReact>
      </Wrapper>
    );
  }
}
