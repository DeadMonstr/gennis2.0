import {API_URL, useHttp} from "../base";


const BASE_URL = 'search'

// qoshimcha parametr "page" qoshish mumkin
export const useResultsSearch = (searchStr) => {
    const {request} = useHttp()
    return request(`${API_URL}${BASE_URL}/${searchStr}`)
}
