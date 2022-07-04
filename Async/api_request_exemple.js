fetch('https://reqres.in/api/users/22')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) //fetch does not return error for these types of errors, it always succeds -> to see if the response was successful or not, we can use the res.ok property

fetch('https://reqres.in/api/users/22')
    .then(res => {
        if (res.ok) {
            console.log(res)
        } else {
            console.log(`The fetch succeded but the status code was ${res.status}\n\n`)
        }
    })


fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },  //specify the type of data we are sending
    body : JSON.stringify({ //converts JavaScript object to JSON
        name: 'User 1'
    })
})  
    .then(res => { return res.json() }) //returns a promise
    .then(data => console.log(data))  //print the response in json format