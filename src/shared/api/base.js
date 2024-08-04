export const API_URL_DOC = `http://192.168.68.117:8000/`;
export const API_URL = `${API_URL_DOC}`; // api have
export const CLASSROOM_API_URL = `http://localhost:3000/`;
export const CLASSROOM_API_URL_DOC = `http://192.168.68.111:8000/`;

// export const API_URL_DOC = `/`;
// export const API_URL = `/api/`;
// export const CLASSROOM_API_URL = `https://classroom.gennis.uz/`;
// export const CLASSROOM_API_URL_DOC = `https://classroom.gennis.uz/`;

export const headers = () => {
    const token = sessionStorage.getItem("token");
    return {
        "Authorization": "Bearer " + token,
        'Content-Type': 'application/json'
    };
};

export const useHttp = () => {
    const request = async (url, method = 'GET', body = null, customHeaders = {}) => {
        try {
            const headers = {
                ...customHeaders,
            };

            const options = {
                method,
                headers,
                credentials: 'include',
                mode: 'cors'
            };

            if (body) {
                if (body instanceof FormData) {
                    delete headers['Content-Type'];
                    options.body = body;
                } else {
                    headers['Content-Type'] = 'application/json';
                    options.body = JSON.stringify(body);
                }
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            return await response.json();
        } catch (e) {
            throw e;
        }
    };

    return { request };
};
