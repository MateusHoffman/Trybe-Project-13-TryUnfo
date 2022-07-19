import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// import logo from '../src/img/Logo.png'
import './App.css';

export default class App extends React.Component {
  state = {
    cardName: 'Rick Sanchez', // 'string'
    cardDescription: 'Um cientista maluco alcoólatra de 70 anos extremamente inteligente', // 'string'
    cardAttr1: '0', // 'string'
    cardAttr2: '0', // 'string'
    cardAttr3: '0', // 'string'
    cardImage: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2018/02/rick-sanchez.jpg', // 'string'
    cardRare: 'normal', // 'string'
    cardTrunfo: false, // 'boolean'
    hasTrunfo: false, // 'boolean'
    isSaveButtonDisabled: true, // 'boolean'
    savedCards: [],
    filterCards: [],
    disabledInput: false,
  }

  nameFilter = (event) => {
    const { savedCards } = this.state;
    const { target: { value } } = event;
    this.setState({ filterCards: savedCards
      .filter((e) => (e.cardName).includes(value)) });
  }

  rareFilter = (event) => {
    const { savedCards } = this.state;
    const { target: { value } } = event;
    this.setState({ filterCards: savedCards
      .filter((e) => ((value === 'todas') ? savedCards : e.cardRare === value)),
    });
  }

  trunfoFilter = (event) => {
    const { savedCards } = this.state;
    const { target: { checked } } = event;
    if (checked === false) {
      this.setState({ disabledInput: false });
      this.setState({ filterCards: (checked === false)
        ? savedCards
        : savedCards.filter((e) => (e.cardTrunfo === checked)),
      });
    } else {
      this.setState({ disabledInput: true });
      this.setState({ filterCards: (checked === false)
        ? savedCards
        : savedCards.filter((e) => (e.cardTrunfo === checked)),
      });
    }
  }

  checksTrunfo = () => {
    const { filterCards } = this.state;
    if (filterCards.find((e) => e.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  deleteCard = (i) => {
    const { filterCards, savedCards } = this.state;
    filterCards.splice(i, 1);
    savedCards.splice(i, 1);
    this.setState({ filterCards }, () => this.checksTrunfo());
    this.setState({ savedCards }, () => this.checksTrunfo());
  }

  onInputChange = (event) => {
    const { target: { name, value, checked } } = event;
    if (name !== 'cardTrunfo') {
      this.setState({ [name]: value }, this.validateInputs);
    } else {
      this.setState({ [name]: checked }, this.validateInputs);
    }
  }

  onSaveButtonClick = (event) => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // savedCards,
    } = this.state;
    event.preventDefault();
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevCard) => ({
      savedCards: [
        ...prevCard.savedCards,
        card,
      ],
      filterCards: [
        ...prevCard.savedCards,
        card,
      ],
    }));
    this.setState({
      cardName: 'Rick Sanchez', // 'string'
      cardDescription: 'Um cientista maluco alcoólatra de 70 anos extremamente inteligente', // 'string'
      cardAttr1: '0', // 'string'
      cardAttr2: '0', // 'string'
      cardAttr3: '0', // 'string'
      cardImage: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2018/02/rick-sanchez.jpg', // 'string'
      cardRare: 'normal', // 'string'
      cardTrunfo: false, // 'boolean'
      isSaveButtonDisabled: true, // 'boolean'
    }, () => this.checksTrunfo());
  };

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const max = 90;
    const sum = 210;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && cardRare !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= max)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= max)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= max)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sum
    ) return this.setState({ isSaveButtonDisabled: false });
    this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    const { filterCards, disabledInput } = this.state;
    return (
      <div className="App">
        <header className='header-main'>
          <div className='logo'>
            TRUNFO
          </div>
          <div className='div-nav'>
            <button><a href="https://www.linkedin.com/in/mateushoffman/" target="_blank" rel="noreferrer">LinkedIn</a></button>
            <button><a href="https://github.com/MateusHoffman" target="_blank" rel="noreferrer">GitHub</a></button>
          </div>
        </header>
        <section className="create-new-card">
          <section className="section-form">
            <div>
              <Form
                { ...this.state }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
                checksTrunfo={ this.checksTrunfo }
              />
            </div>
          </section>
          <section className="section-card">
            <Card
              { ...this.state }
            />
          </section>
        </section>
        <section className="your-cards">
          <header className='header-main'>
            <h1 className='logo'>SEU BARALHO: </h1>
            <section className='section-filter'>
              <input
                className="name-filter"
                type="text"
                data-testid="name-filter"
                placeholder='Pesquise pelo nome da carta'
                onChange={ this.nameFilter }
                disabled={ disabledInput }
              />
              <select
                className="rare-filter"
                data-testid="rare-filter"
                onClick={ this.rareFilter }
                disabled={ disabledInput }
              >
                <option>todas</option>
                <option>normal</option>
                <option>raro</option>
                <option>muito raro</option>
              </select>
              <div className="trunfo-filter">
              <span>Trunfo:</span>
              <input
                data-testid="trunfo-filter"
                type="checkbox"
                onClick={ this.trunfoFilter }
              />
              </div>
            </section>
          </header>
          <section className='all-cards'>
              {
                filterCards.map((e, i) => (
                  <section className='section-card' key={ i }>
                  <div
                    className="your-card"
                  >
                    <Card
                      { ...e }
                    />
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => this.deleteCard(i) }
                    >
                      Excluir
                    </button>
                  </div>
                  </section>
                  ))
                }
                </section>
        </section>
      </div>
    );
  }
}
