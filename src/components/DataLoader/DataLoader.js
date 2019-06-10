import React from 'react';
import Card from '../../components/Card/Card'

class DataLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data_returned: []
    };
  }

  componentDidMount() {
    const root_choice = this.props.root_choice;
    //const api_url = "https://swapi.co/api/" + {this.props.root_choice} + "/";
    fetch("https://swapi.co/api/"+root_choice)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data_returned: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderSwitch(request_type) {
  const { error, isLoaded, data_returned } = this.state;
  console.log(request_type);
  console.log(data_returned)    
  switch(request_type) {
    case 'films':
    return(
        data_returned.map(films => (
              <Card 
                  data = {films}
                  type = {this.props.root_choice}
              />
          ))    
      );
    case 'people':
    return(
        data_returned.map(people => (
              <Card 
                  data = {people}
                  type = {this.props.root_choice}
              />
          ))    
      );
    case 'species':
    return(
        data_returned.map(species => (
              <Card 
                  data = {species}
                  type = {this.props.root_choice}
              />
          ))    
      );
        case 'planets':
    return(
        data_returned.map(planets => (
              <Card 
                  data = {planets}
                  type = {this.props.root_choice}
              />
          ))    
      );
        case 'vehicles':
    return(
        data_returned.map(vehicles => (
              <Card 
                  data = {vehicles}
                  type = {this.props.root_choice}
              />
          ))    
      );
        case 'starships':
    return(
        data_returned.map(starships => (
              <Card 
                  data = {starships}
                  type = {this.props.root_choice}
              />
          ))    
      );
    }
}

  render() {
    const { error, isLoaded, data_returned } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return(
        <div>
          {this.renderSwitch(this.props.root_choice)}
           </div>
            );
          }
  }
 
}

export default DataLoader;
/*

    case 'starships'
      return 'foo';
    case 'species':
      return 'bar';
    case 'starships'
      return 'foo';
    case 'species':
      return 'bar';
    case 'starships'
      return 'foo';
    default:
      return 'foo';
        

*/