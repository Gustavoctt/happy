import React from 'react';
import { useHistory } from 'react-router-dom';

import successImg from '../images/success.svg';
import '../styles/pages/success.css';

const Sucess: React.FC = () => {

  const {push} = useHistory();

  return (
    <div id="final-container">
      <div className="final-description">
        <h2>Ebaaa!</h2>
        <p>O cadastro foi feito com sucesso!</p>

        <button 
          className="final-button" 
          type="button"
          onClick={() => push('/app')}
          >
          Voltar ao mapa!
        </button>
      </div>

      <div className="final-image">
        <img src={successImg} alt="Sucesso"/>
      </div>
    </div>
  );
}

export default Sucess;