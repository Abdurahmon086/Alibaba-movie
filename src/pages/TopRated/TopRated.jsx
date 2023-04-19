import React, { useEffect, useState } from 'react'
import { api } from '../../api/api'
import MainCard from '../../UI/Card/MainCard'
import { Link } from 'react-router-dom'
import './TopRated.scss'

function TopRated() {
    const [topRated, setTopRated] = useState([])

    useEffect(() => {
        api.getTopMovie(1).then(res => setTopRated(res.data))
    }, [])

    console.log(topRated);
    return (
        <main className='top-rated container'>
            <ul className='top-rated__list'>
                {
                    topRated && topRated?.results?.length > 0 && topRated.results.map((item) => {
                        return (<Link to={`/movie/${item.id}`} key={item.id} className='top-rated__link'>
                            <MainCard img={item.poster_path} year={item.release_date} title={item.original_title} />
                        </Link>)
                    })
                }
            </ul>
        </main>
    )
}

export default TopRated