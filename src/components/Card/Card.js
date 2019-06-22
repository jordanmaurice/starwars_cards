
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
                  <p>Classification: {this.props.data.classification}</p>
                  <p>Designation: {this.props.data.designation}</p>
                  <p>Average Lifespan: {this.props.data.average_lifespan}</p>
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
                  <p>Birth Year: {this.props.data.birth_year}</p>
                  <p>Height: {this.props.data.height}</p>
                  <p>Mass: {this.props.data.mass}</p>
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
                  <p>Population: {this.props.data.population}</p>
                  <p>Climate: {this.props.data.climate}</p>
                  <p>Gravity: {this.props.data.gravity}</p>
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
                  <div>
                  <p>Population: {this.props.data.population}</p>
                  <p>Climate: {this.props.data.climate}</p>
                  <p>Gravity: {this.props.data.gravity}</p>
                  </div>
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