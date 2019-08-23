import React, { useEffect, useState } from 'react';
import {Row, Col} from 'reactstrap';

export default function List({name}) {
    const [states, setStates] = useState({todos: []})
    // const [open, setOpen] = useState(false)
    const [topping, setTopping] = useState('')

    function getPizzas() {
        fetch('http://localhost:3000/gettoppings')
        .then(res => res.json())
        .then((data) => setStates({todos: data}))
        .catch(err => console.log(err.message))
    }

    function postTopping(name){
        fetch('http://localhost:3000/toppings', {
            method: 'POST',
            body: JSON.stringify({topping_name: name}),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <div>
            <Row>
              <Col sm="12">
                <h1 style={{textAlign: 'center'}}>{name}</h1>
                {/* <h1>La puerta esta {open ? 'abierta' : 'cerrada'}</h1> */}
                {/* <button onClick={() => setOpen(!open)}>{open ? 'Cerrar' : 'Abrir'}</button> */}
                <button onClick={() => postTopping(topping)}>post</button>
                <button onClick={() => getPizzas()}>refresh</button>
                <form>
                    <label>
                        Topping:
                        <input type="text" value={topping} onChange={(event)=>setTopping(event.target.value)} />
                    </label>
                </form>
                <ul>
                    {states.todos.map(post => <li key={post.topping_id}>{post.topping_id}: {post.topping_name}</li>)}
                </ul>
              </Col>
            </Row>
        </div>
    )
}
