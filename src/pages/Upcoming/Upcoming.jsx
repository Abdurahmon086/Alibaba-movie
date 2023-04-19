import React, { useEffect, useState } from 'react'
import { api } from '../../api/api'
import MainCard from '../../UI/Card/MainCard'
import { Link } from 'react-router-dom'
import './index.scss'

function Upcoming() {

    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        api.getUpcomingMovie(1).then(res => setUpcoming(res.data))
    }, [])

    console.log(upcoming);
    return (
        <main className='upcoming container'>
            <ul className='upcoming__list'>
                {
                    upcoming && upcoming?.results?.length > 0 && upcoming.results.map((item) => {
                        return (<Link to={`/movie/${item.id}`} key={item.id} className='upcoming__link'>
                            <MainCard img={item.poster_path} year={item.release_date} title={item.original_title} />
                        </Link>)
                    })
                }
            </ul>
        </main>
    )
}

export default Upcoming