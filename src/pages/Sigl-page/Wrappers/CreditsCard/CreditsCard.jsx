import React from 'react';
import './CreditsCard.scss'

function CreditsCard({ character, img, creditId, name }) {
    return (
        <li className='credits__item card'>
            <img src={"https://image.tmdb.org/t/p/w500" + img} alt={name} className='card__img' height={175}/>
            <div className="card__inner">
                <h4 className="card__title">{name}</h4>
                <p className='card__text'>{character}</p>
            </div>
        </li>
    )
}

export default CreditsCard