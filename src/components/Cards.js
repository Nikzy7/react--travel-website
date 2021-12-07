import React from 'react'
import { CardItem } from './CardItem'
import './Cards.css'

export const Cards = () => {
    return (
        <>
            <div className="cards">
                <h1>Check out these epic destinations</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                                src='images/img-9.jpg'
                                text='Explore the hidden waterfall deep inside the Amazon'
                                label='Adventure'
                                path='/products'
                            />
                            <CardItem 
                                src='images/img-2.jpg'
                                text='Travel through the islands of Bali in a private cruise'
                                label='Luxury'
                                path='/services'
                            />
                        </ul>

                        <ul className="cards__items">
                            <CardItem 
                                src='images/img-8.jpg'
                                text='Explore the Sahara Desert on a camel'
                                label='Adventure'
                                path='/services'
                            />
                            <CardItem 
                                src='images/img-4.jpg'
                                text='Experience Football on Himalayan Mountain Top'
                                label='Adventure'
                                path='/services'
                            />
                            <CardItem 
                                src='images/img-3.jpg'
                                text='Explore the uncharted Atlantic Ocean'
                                label='Adventure'
                                path='/services'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
