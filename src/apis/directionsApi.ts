import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives:false,
        geometries:'geojson',
        overview: 'simplified',
        steps:false,
        access_token:'pk.eyJ1IjoibGNhcmRlbmFzbCIsImEiOiJjbDFtN3p3OW8wYXdlM2ttamw4dHp1N244In0.AjgL4OlQAU-wlVK8b_VIqw'
    }
})

export default directionsApi;