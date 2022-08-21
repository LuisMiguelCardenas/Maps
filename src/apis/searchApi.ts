import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        languaje:'es',
        access_token:'pk.eyJ1IjoibGNhcmRlbmFzbCIsImEiOiJjbDFtN3p3OW8wYXdlM2ttamw4dHp1N244In0.AjgL4OlQAU-wlVK8b_VIqw'
    }
})

export default searchApi;