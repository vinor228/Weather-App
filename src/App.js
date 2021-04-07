import classes from './App.module.css';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootswatch/lux/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import React from "react";
import WeatherDisplay from "./WatherDisplay/WeatherDisplay";

const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePlace: 0,
        }
    }

    render() {
        const activePlace = this.state.activePlace
        return (
            <div >
                <Navbar>
                    <Navbar.Brand>
                        React Simple Weather App
                    </Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <Nav
                                bsStyle="pills"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }


}

export default App;
