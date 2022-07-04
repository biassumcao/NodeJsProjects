const fetch = require('node-fetch');

async function showLyrics(){
    try {
        const response = await fetch('https://api.lyrics.ovh/v1/Coldplay/Yellow');
        const data = await response.json();
        console.log(data.lyrics);
        
    } catch (error) {
        console.log(error);
    }
}

showLyrics();