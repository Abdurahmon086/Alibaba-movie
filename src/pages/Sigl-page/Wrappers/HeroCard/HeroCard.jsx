import React from 'react'
import './HeroCard.scss'

function HeroCard({ title, posterImg, budget, revenue, status, rating, overview, date, runtime, img, category, id }) {

  return (
    <section className='single-hero-back'>
      <div className="container">
        <div className="single-hero">
          <img src={"https://image.tmdb.org/t/p/w300" + posterImg} alt={title} className='single-hero__img' />
          <div className="single-hero__right hero">
            <div className="hero__top">
              <h3 className="hero__title">{title}   </h3>
              <ul className="hero__inner">
                <li className='hero__inner-item'><p className='hero__time'>{date} <span>(US)</span> </p></li>
                <li className='hero__inner-item'>
                  <ul className='hero__list'>
                    {
                      category && category?.length > 0 && category.map((item, i) => <li key={i} className='hero__item'>{(i ? ", " : '') + item.name}</li>)
                    }
                  </ul>
                </li>
                <li className='hero__inner-item'>
                  <p className='hero__timeout'>{Math.trunc(runtime / 60)}h {runtime % 60}m</p>
                </li>
              </ul>
            </div>
            <div className="hero__middle">
              <h3 className="hero__title-ower">Overview</h3>
              <p className='hero__text-ower'>{overview}</p>
            </div>
            <div className="hero__bottom bottom">
              <ul className="bottom__list">
                <li className='bottom__item'>
                  <h4 className='bottom__item-title'>Status</h4>
                  <p className='bottom__item-text'>{status}</p>
                </li>
                <li className='bottom__item'>
                  <h4 className='bottom__item-title'>Budget</h4>
                  <p className='bottom__item-text'>${budget}</p>
                </li>
                <li className='bottom__item'>
                  <h4 className='bottom__item-title'>Revenue</h4>
                  <p className='bottom__item-text'>${revenue}</p>
                </li>
                <li className='bottom__item'>
                  <h4 className='bottom__item-title'>Rating</h4>
                  <p className='bottom__item-text'>{rating}</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroCard