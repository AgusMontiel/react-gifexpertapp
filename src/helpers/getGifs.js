

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=10U3q6yjSLZsz2xP3kxC6wxR6SQE95JO`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}