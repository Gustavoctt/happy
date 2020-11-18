import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';

// import { Container } from './styles';

const Orphanage: React.FC = () => {
  return (
    <div id="page-orphanage">
        
        <main>
            <div className="orphanage-details">
                <img src="" alt=""/>

                <div className="images">
                    <button>
                        <img src="" alt=""/>
                    </button>
                </div>

                <div className="orphanage-details-content">
                    <h1>Lar das Meninas</h1>

                    <p>Descrição</p>

                    <div className="map-container">
                        <Map
                            center={[-28.3528488,-49.2909063]}
                            zoom={16}
                            style={{width: '100%', height: 280}}
                            dragging={false}
                            touchZoom={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                        >
                            <TileLayer 
                                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            <Marker interactive={false} icon={mapIcon} position={[-28.3528488,-49.2909063]} />
                        </Map>

                        <footer>
                        <a  target="_blank" rel="noopener noreferrer" href="#">Ver rotas no Google Maps</a>
                        </footer>
                    </div>

                    
                </div>
            </div>
        </main>
    </div>
    );
}

export default Orphanage;