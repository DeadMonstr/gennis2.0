


export const API_URL_DOC = `http://192.168.68.107:8000/`
export const API_URL = `${API_URL_DOC}`  // api have
export const CLASSROOM_API_URL = `http://localhost:3000/`
export const CLASSROOM_API_URL_DOC = `http://192.168.68.111:8000/`

// export const API_URL_DOC = `/`
// export const API_URL = `/api/`
// export const CLASSROOM_API_URL = `https://classroom.gennis.uz/`
// export const CLASSROOM_API_URL_DOC = `https://classroom.gennis.uz/`


export const headers = () => {
    const token = sessionStorage.getItem("token")
    return {
        "Authorization" : "Bearer " + token,
        'Content-Type': 'application/json'
    }
}


export const useHttp = () => {
    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method,mode: 'cors', body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            return await response.json();

        } catch(e) {
            throw e;
        }
    }

    return {request}
}
