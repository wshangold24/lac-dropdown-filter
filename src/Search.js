import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search({ list, bots, setBots, className = "mb-3" }) {

    function filterBySearch(input) {
        setBots(prev => list.filter(b => b.name.toLowerCase().includes(input.toLowerCase())));
    }

    return (
        <InputGroup className={className}>
            <InputGroup.Text id="search-label">Search</InputGroup.Text>
            <Form.Control
                id="search-input"
                placeholder="Start typing"
                aria-label="Username"
                onChange={e => filterBySearch(e.target.value)}
            />
        </InputGroup>
    );
}

export default Search;
