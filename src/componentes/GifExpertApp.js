import { useState } from 'react';

import AddCategory from './AddCatogory';
import GifGrid from './GifGrid';

const GifEXpertApp = () => {

    // const categories = ['One Punch', 'Death Note', 'Evangelion'];

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {

    //     // setCategories( [...categories, 'HunterXHunter']);
    //     setCategories( cats => [...categories, 'HunterXHunter']);

    // };

    return(
        <>
            <h2>-_- GifEXpertApp -_-</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />


            <ol>
                {
                    categories.map( (category) => 
                        <GifGrid
                            key={ category } 
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    );
};

export default GifEXpertApp;