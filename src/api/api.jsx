import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = "7e504bb9c1dc73a8c04daac227c364fb"

export const api = {  //biz api qisqartirish maqsadida qilyapmiz
    getPopulerMovie: (page) => {  //bu yerda page parametirida pagelar ni olib kelgani ishlatamiz 9
        return axios(BASE_URL + '/movie/popular', {    //base url alohida qilib oldik oson lashtirish uchun ('/movie/popular') bu uzgarib turadi va yunalishini kursatadi
            params: {        // bu axios ning qulayligi bu ning vazifasi ? & yaniy sovol berdi buning ichida (https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1) shunga uhshagan qiladi
                api_key: API_KEY, // api_key shunga teng (api_key=) APi_KEY (<<api_key>>)
                page: page // pagi esa (page=) page (1)
            }
        })
    },
    getUpcomingMovie: (page) => {  //bu yerda page parametirida pagelar ni olib kelgani ishlatamiz 9
        return axios(BASE_URL + '/movie/upcoming', {    //base url alohida qilib oldik oson lashtirish uchun ('/movie/popular') bu uzgarib turadi va yunalishini kursatadi
            params: {        // bu axios ning qulayligi bu ning vazifasi ? & yaniy sovol berdi buning ichida (https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1) shunga uhshagan qiladi
                api_key: API_KEY, // api_key shunga teng (api_key=) APi_KEY (<<api_key>>)
                page: page // pagi esa (page=) page (1)
            }
        })
    },
    getTopMovie: (page) => {  //bu yerda page parametirida pagelar ni olib kelgani ishlatamiz 9
        return axios(BASE_URL + '/movie/top_rated', {    //base url alohida qilib oldik oson lashtirish uchun ('/movie/popular') bu uzgarib turadi va yunalishini kursatadi
            params: {        // bu axios ning qulayligi bu ning vazifasi ? & yaniy sovol berdi buning ichida (https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1) shunga uhshagan qiladi
                api_key: API_KEY, // api_key shunga teng (api_key=) APi_KEY (<<api_key>>)
                page: page // pagi esa (page=) page (1)
            }
        })
    },
    getSinglePage: (id) => {
        return axios(BASE_URL + '/movie/' + id, {    //base url alohida qilib oldik oson lashtirish uchun ('/movie/now_playing') bu uzgarib turadi va yunalishini kursatadi
            params: {
                api_key: API_KEY, // api_key shunga teng (api_key=) APi_KEY (<<api_key>>)
            }
        })
    },
    getSingleCredits: (id) => {
        return axios(BASE_URL + '/movie/' + id + '/credits', {    //base url alohida qilib oldik oson lashtirish uchun ('/movie/now_playing') bu uzgarib turadi va yunalishini kursatadi
            params: {
                api_key: API_KEY, // api_key shunga teng (api_key=) APi_KEY (<<api_key>>)
            }
        })
    },
    getSingleSimiler: (id) => {
        return axios(BASE_URL + '/movie/' + id + '/similar', {    //base url alohida qilib oldik oson lashtirish uchun ('/movie/now_playing') bu uzgarib turadi va yunalishini kursatadi
            params: {
                api_key: API_KEY, // api_key shunga teng (api_key=) APi_KEY (<<api_key>>)
            }
        })
    }
}