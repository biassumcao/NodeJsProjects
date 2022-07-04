function sum(x) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number') {
            reject(`${x} is not a number`);
        }
        setTimeout(() => {
            resolve(x + x);
        }, 3000);
    })
}
async function main() {
    try {
        const result = await sum('#');
        console.log(`Here is the result: ${result}`);
    } catch (error) {
        console.log(`We've got an error: ${error}`);
    }
}

main();