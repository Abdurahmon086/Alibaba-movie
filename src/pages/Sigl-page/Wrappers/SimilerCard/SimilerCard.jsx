import React from 'react'
import './SimilerCard.scss'

function SimilerCard({ img, title }) {
    return (
        <li className='similer__item card'>
            <img src={"https://image.tmdb.org/t/p/w200" + img} alt={title}  className='card__img'/>
            <div className="card__inner">
                <h4 className="card__title">{title}</h4>
            </div>
        </li>
    )
}

export default SimilerCard