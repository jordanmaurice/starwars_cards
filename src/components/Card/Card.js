
import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Card.css';
class SpeciesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    console.log(this.props.type);
    if(this.props.type == "films"){
      return (

          <Col sm="12">
            <Card body
                className="card_holder">
              <CardTitle
                className="card_title">{this.props.data.title}</CardTitle>
              <CardText>
              <ul>
                  <li>Release Date: {this.props.data.release_date}</li>
                  <li>Director: {this.props.data.director}</li>
                  <li>{this.props.data.opening_crawl}</li>
              </ul>
              </CardText>
            </Card>
          </Col>

    );
    }

    if(this.props.type == "species"){
      return (
        <Row>
          <Col sm="12">
            <Card body
                className="card_holder">
              <CardTitle>{this.props.data.name}</CardTitle>
              <CardText>
                  <p>Classification: {this.props.data.classification}</p>
                  <p>Designation: {this.props.data.designation}</p>
                  <p>Average Lifespan: {this.props.data.average_lifespan}</p>
              </CardText>
            </Card>
          </Col>
        </Row>
    );
    }
    if(this.props.type == "people"){
      return (
        <Row>
          <Col sm="12">
            <Card body
                className="card_holder">
              <CardTitle>{this.props.data.name}</CardTitle>
              <CardText>
                  <p>Birth Year: {this.props.data.birth_year}</p>
                  <p>Height: {this.props.data.height}</p>
                  <p>Mass: {this.props.data.mass}</p>
              </CardText>
            </Card>
          </Col>
        </Row>
    );
    }
    if(this.props.type == "planets"){
      return (
        <Row>
          <Col sm="12">
            <Card body
                className="card_holder">
              <CardTitle>{this.props.data.name}</CardTitle>
              <CardText>
                  <p>Population: {this.props.data.population}</p>
                  <p>Climate: {this.props.data.climate}</p>
                  <p>Gravity: {this.props.data.gravity}</p>
              </CardText>
            </Card>
          </Col>

        </Row>
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