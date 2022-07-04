function soma(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + x);
        }, 3000);
    }) 
}

soma(200)
.then((result) => {
    console.log(result);
    console.log("it worked");
})
.catch(() => {
    console.log("it failed");
})