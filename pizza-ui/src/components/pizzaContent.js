import React, {useState, useEffect} from 'react';
import {Alert} from 'reactstrap';
import Request from './request';

export default function PizzaContent({toppingId}){

    const [topping, setTopping] = useState({})

    useEffect(() => {
        getTopping();
    }, [])

    function getTopping(){
        Request.get('http://localhost:3000/toppings/'+toppingId)
        .then(res => res.json())
        .then(response => setTopping(response))
        .catch(err => console.log(err.message))
    }

    return(
        <div>
            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                {topping.topping_name}
            </Alert>
        </div>
    )
}