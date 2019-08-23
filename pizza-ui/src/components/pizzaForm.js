import React, { useState } from 'react';

export default function PizzaForm() {

    const [state, setState] = useState({
        activeTab: '1'
    });

    function toggle(tab) {
        if (state.activeTab !== tab) {
            setState({
                activeTab: tab
            });
        }
    }

    return (
        <div>
        
        </div>
    );
}
