import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
import PizzaList from './pizzaList';
import Request from './request';

export default function Home(){

    const [pizzas, setPizzas] = useState([{}]);
    const [state, setState] = useState('1');

    useEffect(() => {
        getPizzas();
    }, [])

    function getPizzas() {
        Request.get('http://localhost:3000/toppings-pizzas')
        .then(res => res.json())
        .then(response => setPizzas(response))
        .catch(err => console.log(err.message))
    }

    return(
        <div>
        <TabContent activeTab={state}>
          <TabPane tabId="1">
            <h1 style={{textAlign: 'center'}}>Pizzas</h1>
            {pizzas.map((item)=>{
                return(
                    <PizzaList toppingPizza={item} key={`${item.toppings_pizza_id}`}/>
                );
            })}
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