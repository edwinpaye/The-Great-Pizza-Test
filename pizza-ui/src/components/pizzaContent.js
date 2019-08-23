import React, {useState} from 'react';
import {Button, Card, CardBody, Collapse} from 'reactstrap';

export default function PizzaContent({name}){

    const [state, setState] = useState(false)

    return(
        <div>
            <Button 
                color="primary" 
                onClick={()=>setState(!state)} 
                style={{ marginBottom: '1rem' }} 
                size="lg"
                >{name}
            </Button>
            <Collapse
            isOpen={state}
            >
            <Card>
                <CardBody>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
                </CardBody>
            </Card>
            </Collapse>
        </div>
    )
}