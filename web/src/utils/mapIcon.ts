import Leaflet  from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,


    iconSize: [40, 50],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default mapIcon;