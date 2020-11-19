import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from  'react-icons/fi';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import Leaflet from 'leaflet';

import LogoMarket from '../images/map-marker.svg';
import api from '../services/api';


import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
    iconUrl: LogoMarket,
    iconSize: [40, 50],
    iconAnchor: [29, 68],
    popupAnchor: [150, 0]
})

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0 ,0]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInitialPosition([latitude, longitude]);
        })
    }, []);

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

            {orphanages.map(orphanage => {
                return(
                    <Marker
                    key={orphanage.id}
                    icon={mapIcon}
                    position={[orphanage.latitude, orphanage.longitude]}
                    >
                        <Popup
                            closeButton={false}
                            minWidth={240}
                            maxWidth={240}
                            className="map-popup"
                        >
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={28} color="#fff" />
                            </Link>
                        </Popup>
                    </Marker>
                )
            })}

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