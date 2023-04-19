import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../api/api';
import HeroCard from './Wrappers/HeroCard/HeroCard';
import CreditsCard from './Wrappers/CreditsCard/CreditsCard';
import './SimglPage.scss'
import SimilerCard from './Wrappers/SimilerCard/SimilerCard';

function SimglPage() {

  const [single, setSingle] = useState([])
  const [credits, setCredits] = useState([])
  const [similer, setSimiler] = useState([])
  const id = useParams()

  useEffect(() => {
    api.getSinglePage(id.populerId).then(res => setSingle(res.data))

    api.getSingleCredits(id.populerId).then(res => setCredits(res.data.cast))

    api.getSingleSimiler(id.populerId).then(res => setSimiler(res.data.results))
  }, [])

  console.log(similer);

  return (
    <main className='single'>
      <section className='single__hero hero'>
        <HeroCard key={single.id} posterImg={single.poster_path} budget={single.budget} revenue={single.revenue} status={single.status} rating={single.vote_average} title={single.original_title} overview={single.overview} date={single.release_date} runtime={single.runtime} img={single.backdrop_path} category={single.genres} id={single.id} />
      </section>
      <section className='single__credits credits container'>
        <h2 className="credits__title">Top Billed Cast</h2>
        <ul className='credits__list'>
          {
            credits && credits?.length > 0 && credits.map((item => {
              return (
                <Link to={`/movie/${item.id}/cridts`} key={item.id} >
                  <CreditsCard id={item.id} character={item.character} img={item.profile_path} creditId={item.credit_id} name={item.name} />
                </Link>
              )
            }))
          }
        </ul>
      </section>
      <section className='single__similer similer container'>
        <h2 className="similer__title">Top Similer</h2>
        <ul className='similer__list'>
          {
            similer && similer?.length > 0 && similer.map((item => {
              return (
                <Link to={`/movie/${item.id}`} key={item.id} >
                  <SimilerCard id={item.id} title={item.original_title} img={item.poster_path} key={item.id}/>
                </Link>
              )
            }))
          }
        </ul>
      </section>
    </main>
  )
}

export default SimglPage