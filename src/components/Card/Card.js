
import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Card.css';
class SpeciesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Row>
      <Col sm="12">
        <Card body
            className="card_holder">
          <CardTitle>{this.props.name}</CardTitle>
          <CardText>
              <p>Classification: {this.props.classification}</p>
              <p>Designation: {this.props.designation}</p>
              <p>Average Lifespan: {this.props.average_lifespan}</p>
          </CardText>
        </Card>
      </Col>

    </Row>
    );
  }
}

export default SpeciesCard;