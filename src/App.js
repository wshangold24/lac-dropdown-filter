import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Dropdown from './Dropdown';
import exlist1 from "./data/jsondata";
import { Col, Row } from "react-bootstrap";
import Search from "./Search";

function App() {
    //get list of categories
    let categories = new Set();
    exlist1.forEach((item) => categories.add(item.category));
    let categoriesList = [...categories.values()];

    const [bots, setBots] = useState(exlist1);
    const [selectedCategory, setSelectedCategory] = useState();

    function filterByCategory(category) {
        setBots(prev => !category ? (exlist1) : (exlist1.filter(bot => bot.category == category)));
    }

    useEffect(() => {
        filterByCategory(selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="py-5 w-100">
            <Search list={exlist1} bots={bots} setBots={setBots} className='w-75 mx-auto mb-3' />
            <Dropdown className="mx-auto d-flex justify-content-center">
                <Dropdown.Toggle variant="primary" id="dropdown">
                    Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        href="#/All"
                        name="All"
                        onClick={(e) => setSelectedCategory(null)}
                    >
                        All
                    </Dropdown.Item>
                    {categoriesList.map((item) => {
                        return (
                            <Dropdown.Item
                                href={"#/" + item}
                                name={item}
                                onClick={(e) =>
                                    setSelectedCategory((prev) => e.target.name)
                                }
                            >
                                {item}
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Row className="d-block my-5 w-75 d-flex mx-auto justify-content-center">
                {bots.map((bot) => {
                    return (
                        <Card className="p-0">
                            <Card.Header>Category: {bot.category}</Card.Header>
                            <Card.Body>Name: {bot.name}</Card.Body>
                        </Card>
                    );
                })}
                <Col></Col>
            </Row>
        </div>
    );
}

export default App;
