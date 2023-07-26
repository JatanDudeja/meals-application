import React from 'react'
import { useGlobalContext } from '../Context'

export default function Favourites(){

    const {favourites, showSelectedMeal, removeFavourites} = useGlobalContext()

    
    return (
        <section className='favorites'>
            <div className='favorites-content'>
                <h5>Favourites</h5>
            </div>
            <div className='favorites-container'>

            {
                 favourites.map(function(favourite){
                    const {idMeal, strMeal : title, strMealThumb : image} = favourite
                    return(
                        <div key={idMeal} className='favorite-item'>
                            <img src={image} className='favorites-img img' onClick={() => showSelectedMeal(idMeal, true) }/>
                            <button className='remove-btn' onClick={() => removeFavourites(idMeal, true)}>Remove</button>
                            </div>
                            
                            )
                        })
                    }
            </div>
        </section>
    )
}