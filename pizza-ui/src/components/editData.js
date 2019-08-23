import React from 'react';
import { Button, Alert } from 'reactstrap';

export default function EditData({name}){

    const [state, setState] = useState()

    return (
        <div>
            <h1>EditData</h1>
            <Button color="danger" size="lg">danger</Button>{' '}
            <Button color="danger">Danger!</Button>
        </div>
    )
}
