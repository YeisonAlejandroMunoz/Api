import React from 'react'
import Card from 'react-bootstrap/Card';


const CardApp = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.foto} />
      <Card.Body>
        <Card.Title> {props.nombre} </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardApp;