import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/create-orphanages.css';

const CreateOrpganage: React.FC = () => {
  return (
      <div id="page-create-orphanage">
          <Sidebar/>

          <main>
              <form onSubmit={()=>{}} className="create-orphanage-form">
                  <fieldset>
                      <legend>Dados</legend>

                      <Map
                        center={[-28.3528488,-49.2909063]}
                        style={{width: '100%', height: 100}}
                        zoom={15}
                      >
                          
                        <TileLayer 
                            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                        />

                        <Marker
                            interactive={false}
                            icon={mapIcon}
                            position={[-28.3528488,-49.2909063]}
                        />
                      </Map>
                  </fieldset>
              </form>
          </main>
      </div>
  );
}

export default CreateOrpganage;