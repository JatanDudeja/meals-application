import React from 'react'
import { useGlobalContext } from '../Context'

export default function Modal(){
    const {selectedMeal, closeModal} = useGlobalContext()
    const {strSource: source, strMeal : title, strMealThumb : image, strInstructions : text, } = selectedMeal
    // console.log(selectedMeal)

    return (
        <aside className='modal-overlay'>
            <div className='modal-container'>
                <img src = {image} className='img modal-img' /> 
                <div className='modal-content'>
                    <h1>{title}</h1>
                    <p>Cooking Instructions : </p>
                    <p>{text}</p>
                    <a href={source} target='_blank'>Original Source</a>
                    <button className='btn btn-hipster close-btn' onClick={closeModal}>Close</button>

                </div>
            </div>
        </aside>
    )
}