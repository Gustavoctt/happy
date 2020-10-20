import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from  'react-icons/fi';

import 'leaflet/dist/leaflet.css';
import {Map, TileLayer} from 'react-leaflet';

import LogoMarket from '../images/map-marker.svg';

import '../styles/orphanages-map.css';

function OrphanatesMap(){
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
        </Map>

        <div>
            <Link to="" className="create-orphanage">
                <FiPlus size={26} color="#FFF"/>
            </Link>
        </div>
    </div>
  );
}

export default OrphanatesMap;