 
import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Card.css';
import classnames from 'classnames';

class SpeciesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);

var sharshipBG = require('./starships.svg')
var vehiclesBG = require('./vehicles.svg')

var starshipStyle = {
    background: 'url(' + sharshipBG + ') no-repeat bottom right',
    backgroundOrigin:  'content-box',  
    backgroundSize: '100px 100px'
}


var bg_link

var cardStyle = {
    background: 'url(' + bg_link + ') no-repeat bottom right',
    backgroundOrigin:  'content-box',  
    backgroundSize: '100px 100px'
}

    if(this.props.type === "films"){

      return (
            <Card body
                className="card_holder">
              <CardTitle
                className="card_title">{this.props.data.title}</CardTitle>
              <CardText
                  className = "card_description">
                  {this.props.data.opening_crawl}
              </CardText>
            </Card>

    );
    }

    if(this.props.type === "species"){
      return (
            <Card body
                className="card_holder">
              <CardTitle
                  className = "card_title">{this.props.data.name.toUpperCase()}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul>
                  <li>CLASSIFICATION: <span>{this.props.data.classification.toUpperCase()}</span></li>
                  <li>DESIGNATION: <span>{this.props.data.designation.toUpperCase()}</span></li>
                  <li>AVERAGE LIFESPAN: <span>{this.props.data.average_lifespan.toUpperCase()}</span></li>
                  </ul>
              </CardText>
            </Card>
    );
    }
    if(this.props.type === "people"){
      return (
            <Card body
                className="card_holder">
              <CardTitle
                  className = "card_title">{this.props.data.name}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul>
                  <li>Birth Year: <span>{this.props.data.birth_year}</span></li>
                  <li>Height: <span>{this.props.data.height}</span></li>
                  <li>Mass: <span>{this.props.data.mass}</span></li>
                  </ul>
              </CardText>
            </Card>
    );
    }
    if(this.props.type === "planets"){
      return (
            <Card body
                className="card_holder">
              <CardTitle
                  className = "card_title">{this.props.data.name}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul>
                  <li>Population: <span>{this.props.data.population}</span></li>
                  <li>Climate: <span>{this.props.data.climate}</span></li>
                  <li>Gravity: <span>{this.props.data.gravity}</span></li>
                  </ul>
              </CardText>
            </Card>
    );
    }
        if(this.props.type === "vehicles"){
bg_link = vehiclesBG
      return (
            <Card body
                className="card_holder"
                style = {cardStyle}>
              <CardTitle
                  className = "card_title">{this.props.data.name}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul>
                  <li>Model: <span>{this.props.data.model}</span></li>
                  <li>Manufacturer: <span>{this.props.data.manufacturer}</span></li>
                  <li>Vehicle Class: <span>{this.props.data.vehicle_class}</span></li>

                  </ul>
              </CardText>
            </Card>
    );
    }
        if(this.props.type === "starships"){
        bg_link = sharshipBG
      return (

            <Card 
                body
                className="card_holder"
                style = {cardStyle}>
              <CardTitle
                  className = "card_title">{this.props.data.name}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul>
                  <li>Starship Class: <span>{this.props.data.starship_class}</span></li>
                  <li>Manufacturer: <span>{this.props.data.manufacturer}</span></li>
                  <li>Model: <span>{this.props.data.model}</span></li>
                  </ul>
              </CardText>
            </Card>
    );
    }
    else{
      return(
        <div>ayy</div>
        )
    }

  }
}

export default SpeciesCard;

/*
                  Release Date: {this.props.data.release_date}
                  Director: {this.props.data.director}
                  {{"background": "url(starships.svg) no-repeat bottom right !important"}}*/