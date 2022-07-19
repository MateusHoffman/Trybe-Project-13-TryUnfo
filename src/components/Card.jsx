import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // cardPreview,
    } = this.props;
    return (
      <div className="card">
        <div>
          <div className='header-card'>
            <p className='inteligencia' data-testid="attr1-card">{` ${cardAttr1}`}</p>
            <p data-testid="name-card" className='name'>{ cardName }</p>
          </div>
          <div className='img-card'>
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          </div>
          <div className="div-description">
            <p className='description-card' data-testid="description-card">{ cardDescription }</p>
          </div>
          <p className="rare-card" data-testid="rare-card">{cardRare}</p>
          <div className='footer-container'>
            <footer className="footer-card">
              <p className='agilidade' data-testid="attr3-card">{` ${cardAttr3}`}</p>
              {(cardTrunfo === true) ? <p className='trunfo' data-testid="trunfo-card">Super Trunfo</p> : <p className='trunfo' />}
              <p className='força' data-testid="attr2-card">{` ${cardAttr2}`}</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardPreview: PropTypes.bool,
}.isRequired;
