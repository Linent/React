const api_key = 'z6ZNEjrKMR2SAQxsTf4YsRHSIsdFUs5w';

const url = 'https://api.giphy.com/v1/gifs/random';

const api_url = fetch(`${url}/?api_key=${api_key}`);

api_url
.then( res => res.json() )
.then( ({ data }) => {
    console.log(data.images.original.url);
})
.catch( console.warn)