// import classes from './App.module.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
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
            cities: [],
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
                    <Row >
                        <Col  >
                            <h3>weather in the city</h3>
                            <Nav
                                variant="pills"
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <Nav.Item
                                        // bsPrefix="super-btn"
                                        key={index}>
                                        <Nav.Link eventKey={index}>
                                            {place.name}
                                        </Nav.Link>
                                    </Nav.Item>
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
