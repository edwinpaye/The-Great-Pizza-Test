import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
import List from './list';

export default function Home(){

    const [state, setState] = useState({
        activeTab: '1'
    });

    function toggle(tab) {
        if (state.activeTab !== tab) {
            setState({
                activeTab: tab
            });
        }
    }

    return(
        <div>
        {/* <Nav pills>
          <NavItem>
          </NavItem>
            {
            universidades.map((univ, i) => {
                return(
                    <option key={univ.id} value={i}>{univ.nombre}</option>
                );
            })
            }
        </Nav> */}
        <TabContent activeTab={state.activeTab}>
          <TabPane tabId="1">
              <List name='Toppings'/>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        </div>
    )
}