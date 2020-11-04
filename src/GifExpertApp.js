import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Inuyasha' ]);
    
    // const handleAdd = () => {
    //     // setCategories( [ ...categories, 'Naruto'] );
    //     setCategories( cats => [ ...cats, 'Naruto' ]);
    // }


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            {/* <button onClick={ handleAdd }>Agregar</button>    */}

            <ol>
                { 
                    categories.map( category =>( 
                        <GifGrid 
                            key={category} 
                            category={ category } 
                        /> 
                    ))
                }
            </ol>
        </div>
    )
}

