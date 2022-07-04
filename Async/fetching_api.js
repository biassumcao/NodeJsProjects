const fetchReturn = fetch('https://ghibliapi.herokuapp.com/people/');

fetchReturn.then((res) =>{ //wait till its resolved
    return res.json()
})
.then((data) => { 
    //mapeia a propriedade name dos objetos retornando um array de nomes e depois junta-os com uma nova linha
    const names = data.map(person => person.name).join('\n');

    console.log(names);
});

console.log(fetchReturn); //pending state