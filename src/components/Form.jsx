import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const trunfoInput = (
      <label htmlFor="trunfo-input" className="label-trunfo">
        <h4 className="input-title">trunfo</h4>
        <input
          className="checkbox-super-trunfo"
          name="cardTrunfo"
          checked={ cardTrunfo }
          type="checkbox"
          onChange={ onInputChange }
          id="trunfo-input"
          data-testid="trunfo-input"
        />
      </label>
    );
    return (
      <form className="form">
        <div className='header-form'>
          <h1>Crie sua carta: </h1>
        </div>
        <div className='form-container'>
        <label htmlFor="cardName">
          <span>Name: </span>
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          <span>Description: </span>
          <input
            type="text"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          <span>Inteligência: </span>
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          <span>Força: </span>
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          <span>Agilidade: </span>
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          <span>Image: </span>
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <div className='div-second-form'>
          <label htmlFor="cardRare">
            <h4>Rarity: </h4>
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          {
            hasTrunfo === true
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : trunfoInput
          }
        </div>
        <button
          className='btn-submit-card'
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.callback,
  onSaveButtonClick: PropTypes.callback,
}.isRequired;
