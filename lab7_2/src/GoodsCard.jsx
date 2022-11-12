import React from 'react';
import { Fruits } from './GoodsList';
function GoodsCard() {
    return (
        <div style={{ textAlign: 'center' }}>
            {Fruits.map(fruit => <GoodCard listElem={fruit} />)}
        </div>
    )
}
const GoodCard = ({ listElem }) => {
    const { image, name, price } = listElem;
    return (
        <div style={{ display: 'inline-block' }}>
            <img src={image} alt='Fruit' width={385} />
            <h2 style={{ color: '#2BBFEF' }}>{name}</h2>
            <p>Cost: {price} grn</p>
        </div>
    )
}
export default GoodsCard;