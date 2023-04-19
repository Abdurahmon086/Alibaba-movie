import React from 'react'
import './mainCard.scss'

function MainCard({ title, year, img }) {
    return (
        <li className='populer__item card' >
            <img src={"https://image.tmdb.org/t/p/w200" + img} alt={title} className='card__img' />
            <div className="card__inner">
                <h4 className='card__title'>{title}</h4>
                <time className='card__time'>{year}</time>
            </div>
        </li>
    )
}

export default MainCard