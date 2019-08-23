import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
import List from './list';
import PizzaContent from './pizzaContent';
import Request from './request';

export default function Home(){

    const [state, setState] = useState({activeTab: '1'});
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        Request.get('http://localhost:3000/pizzas')
        .then(res => res.json())
        .then(response => setPizzas(response))
        .catch(err => console.log(err.message))
    }, [])

    function toggle(tab) {
        if (state.activeTab !== tab) {
            setState({
                activeTab: tab
            });
        }
    }

    function pizza(name, key) {
        return(
            <PizzaContent name={name} key={key}/>
        )
    }

    return(
        <div>
        <TabContent activeTab={state.activeTab}>
          <TabPane tabId="1">
              <List name='Pizzas' component={pizza} items={pizzas}/>
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