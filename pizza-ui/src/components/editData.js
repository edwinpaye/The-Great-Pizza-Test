import React, { useEffect, useState } from 'react';
import { Button, Alert } from 'reactstrap';

export default function EditData({name}){

    const [state, setState] = useState()

    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <div>
            <h1>hola desde EditData</h1>
            <Button color="danger" size="lg">danger</Button>{' '}
            <Button color="danger">Danger!</Button>
            {/* <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                I am an alert and I can be dismissed!
            </Alert> */}
        </div>
    )
}
