
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=EqFY58WMRDEZeR3cLf9vV7F8xLH1D5HS`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    return (data.map( ({id, title, images:{downsized_medium:{url}}}) => {
            return{
                id,
                title,
                url
            }
        })
    );
};