import React from "react";
import {
  Card, CardText, CardText2, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const CardStyle = {
  boxShadpw: "1px 3px 1px 9E9E9E",
  
}

const CharacterCard =props=> {
  return (
    <Card style={{background: '#f1f1f1'}, {CardStyle}}>
      <div className ="grid" >
      <div className="character-card">
        <h1>{props.name}</h1>
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </div>
    </div>





    </Card>
  
  );
}

export default CharacterCard;