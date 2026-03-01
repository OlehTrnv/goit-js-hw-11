import axios from "axios";

const API_KEY = '54847700-f9ce1488f27107b1b46500c94';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    return axios
        .get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            }

        })
        .then(response => response.data);
}