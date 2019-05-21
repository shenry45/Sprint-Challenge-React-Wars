import React, { Component } from 'react';

import CharList from './components/CharList';
import Pagination from './components/pagination/Pagination';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1,
      prev: null,
      next: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = (URL, pageKey) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {

        let pageNumber = 1;

        if (pageKey === 'prev' && data.previous !== null) {
          pageNumber = parseInt(data.prev.split('=')[1]) + 1;
        } 
        if (pageKey === 'next' && data.next !== null){
          pageNumber = parseInt(data.next.split('=')[1]) - 1;
        }

        this.setState({ 
          starwarsChars: data.results,
          page: pageNumber,
          prev: data.prev,
          next: data.next
        });

        
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  pagePrevious = e => {
    e.preventDefault();

    if (this.state.page > 1) {
      this.getCharacters(`https://swapi.co/api/people/?page=${(this.state.page)-1}`, 'prev');
    }

  }

  pageNext = e => {
    e.preventDefault();

    if (this.state.next !== null) {
      this.getCharacters(`https://swapi.co/api/people/?page=${(this.state.page)+1}`, 'next');
    }

  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharList starwarsChars={this.state.starwarsChars}/>
        <Pagination
          page={this.state.page}
          pagePrevious={this.pagePrevious}
          pageNext={this.pageNext}
        />
      </div>
    );
  }
}

export default App;
