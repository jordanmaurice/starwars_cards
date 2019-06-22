import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, CardColumns, CardDeck} from 'reactstrap';
import classnames from 'classnames';
import DataLoader from '../../components/DataLoader/DataLoader'
import './TopNavBar.css'

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
      <center>
        <Nav
            tabs
            className = {classnames('d-flex', 'justify-content-center', 'top-nav')}
            style={{backgroundColor: '#222',    borderBottom: '1px solid #333'}}
        >
          <NavItem>
            <NavLink
              className={classnames('toggle-bar', { active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              FILMS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames('toggle-bar', { active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              PEOPLE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames('toggle-bar', { active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              SPECIES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames('toggle-bar', { active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              PLANETS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames('toggle-bar', { active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              VEHICLES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames('toggle-bar', { active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              STARSHIPS
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
            activeTab={this.state.activeTab}
            mountOnEnter = {true}
            className = "cards-section"
            >

          <TabPane tabId="1">
            <Row>
                {this.state.activeTab == 1 &&
                  <CardColumns>
                  <DataLoader 
                      root_choice = "films"
                  />
                  </CardColumns>                
                }
            </Row>
          </TabPane>
 
          <TabPane tabId="2">
            <Row>
                        <CardColumns>  
            {this.state.activeTab == 2 &&
              <DataLoader 
                  root_choice = "people"
              />
            }
            </CardColumns>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            <CardColumns>  
            {this.state.activeTab == 3 &&
              <DataLoader 
                  root_choice = "species"
              />

              }
            </CardColumns>  
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
            <CardColumns>  
            {this.state.activeTab == 4 &&
              <DataLoader 
                  root_choice = "planets"
              />

              }
                         </CardColumns>  
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
            <CardColumns>  
            {this.state.activeTab == 5 &&
              <DataLoader 
                  root_choice = "vehicles"
              />
            }
            </CardColumns>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
            {this.state.activeTab == 6 &&
              <CardColumns>
              <DataLoader 
                  root_choice = "starships"
              />
              </CardColumns>
            }
            </Row>
          </TabPane>
        </TabContent>
      </center>
      </div>
    );
  }
}

export default TopNavBar;