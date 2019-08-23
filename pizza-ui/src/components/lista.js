import React, { useEffect, useState } from 'react'

const Door = () => {
    const [states, setStates] = useState({todos: []})
    const [open, setOpen] = useState(false)
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
            <h1 style={{textAlign: 'center'}}>Toppings</h1>
            <h1>La puerta esta {open ? 'abierta' : 'cerrada'}</h1>
            <button onClick={() => setOpen(!open)}>{open ? 'Cerrar' : 'Abrir'}</button>
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
        </div>
    )
}

export default Door