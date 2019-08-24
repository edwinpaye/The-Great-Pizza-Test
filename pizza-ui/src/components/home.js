import React, { useState, useEffect } from 'react'
import { TabContent, TabPane} from 'reactstrap';
import PizzaList from './pizzaList';
import Request from './request';

export default function Home(){

    const [pizzas, setPizzas] = useState([]);
    const [state, setState] = useState('1');

    useEffect(() => {
        // Request.post('http://localhost:3000/pizzas', {pizza_id: '1234dsa', pizza_name: 'Peperoni'})
        // Request.post('http://localhost:3000/toppings', {topping_id: '1234asd', topping_name: 'Jamon'})
        // Request.post('http://localhost:3000/toppings-pizzas', {toppings_pizza_id: "basdq12",
        // pizza_id: "1234dsa",
        // toppings_ids: [
        //   "1234asd"
        // ]})
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
            
          </TabPane>
        </TabContent>
        </div>
    )
}