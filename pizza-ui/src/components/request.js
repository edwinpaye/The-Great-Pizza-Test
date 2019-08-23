export default Request = {
    
    get: (route) => {
        return fetch(route, {headers:{
            'Content-Type': 'application/json'
        }})
    },

    post: (route, obj) => {
        fetch(route, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    },

    update: (route, obj) => {
        fetch(route, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(err => console.log(err.message))
    },

    remove: (route) => {
        fetch(route, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(err => console.log(err.message))
    }

}