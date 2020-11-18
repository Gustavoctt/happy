import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from  'react-icons/fi';
import 'leaflet/dist/leaflet.css';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

import LogoMarket from '../images/map-marker.svg';
import Leaflet from 'leaflet';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
    iconUrl: LogoMarket,
    iconSize: [40, 50],
    iconAnchor: [29, 68],
    popupAnchor: [150, 0]
})

function OrphanagesMap(){
  return (
    <div id="page-map">
        <aside>
            <header>
                <img src={LogoMarket} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita</p>
            </header>

            <footer>
                <strong>Orleans</strong>
                <span>Santa Catarina</span>
            </footer>
        </aside>

        <Map
            center={[-28.3528488,-49.2909063]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
        >
           {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
           <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

            <Marker
                icon={mapIcon}
                position={[-28.3528488,-49.2909063]}
            >
                <Popup
                    closeButton={false}
                    minWidth={240}
                    maxWidth={240}
                    className="map-popup"
                >
                    Ofanato das meninas
                    <Link to="/orphanages/1">
                        <FiArrowRight size={28} color="#fff" />
                    </Link>
                </Popup>
            </Marker>

        </Map>

        <div>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={26} color="#FFF"/>
            </Link>
        </div>
    </div>
  );
}

export default OrphanagesMap;