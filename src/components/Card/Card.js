
import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Card.css';

class SpeciesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
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
                  className = "card_title">{this.props.data.name}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul style={{"listStyle": "none", "paddingLeft": "2px"}}
                      className = "text-left">
                  <li>Classification: {this.props.data.classification}</li>
                  <li>Designation: {this.props.data.designation}</li>
                  <li>Average Lifespan: {this.props.data.average_lifespan}</li>
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
                  <ul style={{"listStyle": "none"}}>
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
                  <ul style={{"listStyle": "none"}}>
                  <li>Population: <span>{this.props.data.population}</span></li>
                  <li>Climate: <span>{this.props.data.climate}</span></li>
                  <li>Gravity: <span>{this.props.data.gravity}</span></li>
                  </ul>
              </CardText>
            </Card>
    );
    }
        if(this.props.type === "vehicles"){
      return (
            <Card body
                className="card_holder">
              <CardTitle
                  className = "card_title">{this.props.data.name}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul style={{"listStyle": "none"}}>
                  <li>Model: <span>{this.props.data.model}</span></li>
                  <li>Manufacturer: <span>{this.props.data.manufacturer}</span></li>
                  <li>Vehicle Class: <span>{this.props.data.vehicle_class}</span></li>

                  </ul>
              </CardText>
            </Card>
    );
    }
        if(this.props.type === "starships"){
      return (
            <Card body
                className="card_holder">
              <CardTitle
                  className = "card_title">{this.props.data.name}</CardTitle>
              <CardText
                  className = "card_description">
                  <ul style={{"listStyle": "none"}}>
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
                  Director: {this.props.data.director}*/