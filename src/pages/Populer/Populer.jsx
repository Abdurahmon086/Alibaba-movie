import React, { useEffect, useState } from 'react'
import { api } from '../../api/api'
import MainCard from '../../UI/Card/MainCard'
import './index.scss'
import { Link } from 'react-router-dom'

function Populer() {
    const [populer, setPopuler] = useState([]) // bu yerda bush array yaratik

    useEffect(() => {
        api.getPopulerMovie(1).then(data => setPopuler(data.data)) //bu yer da api dan malumot olyapmiz  uni setPopulerga berib yuborduk

    }, [])  // useEffect biz ga data mizni qayta qayta yuklan masligiga hizmat qiladi asosan 

    return (
        <div className='container'>
            <div className="populer">
                <ul className='populer__list'>
                    {
                        populer && populer?.results?.length > 0 && populer.results.map((item) => { //populer va populerni resulti qiymatlari bormi yuqmi tekshirib uni yurib chiqyapmiz
                            return (    //Link bizda id tengbulganini olishimizda yordam bulyapti yani linkdi bosak id si bilan uzatyapti
                                <Link to={`/movie/${item.id}`} key={item.id} className='populer__link'>
                                    <MainCard title={item.original_title} year={item.release_date} img={item.poster_path} />
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Populer