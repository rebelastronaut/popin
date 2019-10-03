import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'
import Layout from "../components/layout"


const MapMarker = ({ props, text }) => <div style={{ color: '#FE65B7', fontFamily: 'Concert One, cursive', fontSize:'1.5em' }}>{text}</div>;

function createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_CENTER,
            style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
            position: maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true
    };
}


class FindUs extends Component {
    static defaultProps = {
        center: {
            lat: 51.480178,
            lng: -0.083310
        },
        zoom: 17
    };

    render() {
        return (
            <Layout>
                <Intro>
                    Come Join us at Trinity in Camberwell on Tuesdays and Saturdays.
                </Intro>
                <Wrapper>
                    <Contact>
                    Address: Trinity College Centre <br/>
                            1 Newent Close, <br/>
                            LONDON, <br/>
                            SE15 6EF <br/> <br/>

                    Email: stgeorgespopin@gmail.com
                    </Contact>
                    <MapContainer>
                        <GoogleMapReact
                            bootstrapURLKeys={{key:process.env.MAPS_API_KEY}}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            options={createMapOptions}
                        >
                            <StyledMarker
                                style={{color:"red"}}
                                lat={51.480178} 
                                lng={-0.083310}
                                text="PopIn"
                            />
                        </GoogleMapReact>
                    </MapContainer>
                </Wrapper>
            </Layout>
        );
    }
}

export default FindUs;

const StyledMarker = styled(props => <MapMarker {...props} />)`
  font-color: white;
  font-family: 'Concert One', cursive;
  padding: 10px;
  text-align: center;
  background-color: #FE65B7;
`
const Intro = styled.div`
  font-family: 'Concert One', cursive;
  padding: 20px;
  font-size: 2em;
  text-align: center;
  margin-bottom: 50px;

`
const MapContainer = styled.div`
  min-height: 50vh;
  min-width: 40vw;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 20px;
  padding-bottom: 100px;
  height: auto;
`
const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`

const Contact = styled.div`
  font-family: 'Concert One', cursive;
  padding: 20px;
  font-size: 2em;
  text-align: center;
//   min-width: 40vw;
//   min-height: 50vh;
  flex-grow: 1;
  flex-shrink: 1;
  vertical-align: middle;
  @media (max-width: 400px) {
    font-size: 1.5em;
  }

`