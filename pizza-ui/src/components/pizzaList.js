import React, { useEffect, useState } from 'react';
import {Form, Label, Button, Collapse} from 'reactstrap';
import PizzaContent from './pizzaContent';
import Request from './request';

export default function PizzaList({toppingPizza}) {

    const [state, setState] = useState(false)
    const [pizza, setPizza] = useState({})

    useEffect(() => {
        getPizza();
    }, [])

    async function getPizza() {
        Request.get('http://localhost:3000/pizzas/'+toppingPizza.pizza_id)
        .then(res => res.json())
        .then(response => setPizza(response))
        .catch(err => console.log(err.message))
    }
    
    return (
        <div>
            <Form inline>
                <Label sm={8} size="lg">{pizza.pizza_name}</Label>  
                <Button 
                    sm={1}
                    color="primary" 
                    onClick={()=>console.log('http://localhost:3000/pizzas/'+toppingPizza.pizza_id)} 
                    style={{ marginBottom: '1rem'}}
                    className="float-right"
                >Edit
                </Button>
                <Button 
                    sm={1}
                    color="danger" 
                    onClick={()=>setState(!state)} 
                    style={{ marginBottom: '1rem'}}
                    className="float-right"
                >Delete
                </Button>
                <Collapse isOpen={state}>
                    {/* <h1>Toppings:</h1> */}
                    {/* {toppingPizza.toppings_ids.map((item, index)=>{
                        return(
                            <PizzaContent toppingId={item[index]} key={`${item[index]}`}/>
                        );
                    })} */}
                </Collapse>
            </Form>
        </div>
    )
}
