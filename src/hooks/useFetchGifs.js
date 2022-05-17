import { useState, useEffect } from 'react';
import  { getGifs }  from '../helpers/getGifs';


const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })                
            });
    }, [category]);// con [] se evita que se ejecute fuera de la renderizacion o colocando algo, referesca segun el cambiode ese algo
    
    return state;
}

export default useFetchGifs;