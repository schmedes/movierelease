import React, {Component} from 'react';
import jsonp from 'jsonp';
import MovieModal from './moviemodal.jsx';
import {HeaderInput} from './headerinput.jsx';
import {MovieCard} from './moviecard.jsx';
import { moviedata } from './dummydata.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {movielist: moviedata, modal: false, modaldata: {}};
    // this.changeMovieCards = this.changeMovieCards.bind(this);
  }
// fetch Movies from an open api - API DEPRECATED
/*  changeMovieCards(date) {
    jsonp('http://www.myapifilms.com/imdb/comingSoon?format=JSONP&lang=en-us&date=' + date, {param: 'callback', timeout: 60000, prefix: '', name: 'myapifilms'}, function callback(err, data) {
      // on success replace state with response data
      this.setState({movielist: data, modal: this.state.modal, modaldata: this.state.modaldata});
    }
  );
  } */
// Open modal with data from the clicked movie
  toggleModal(data) {
    if (this.state.modal) {
      this.setState({movielist: this.state.movielist, modal: false, modaldata: this.state.modaldata});
    } else {
      this.setState({movielist: this.state.movielist, modal: true, modaldata: data});
    }
  }

  render() {
    return (
    <div>
    <HeaderInput /* changeFunction={this.changeMovieCards.bind(this)} */ />
    <div className= "content">
    <MovieModal data={this.state.modaldata} open={this.state.modal} toggleFunction={this.toggleModal.bind(this)}/>
    {
            this.state.movielist.map((data, index) =>
            this.state.movielist[index].movies.map((datab) =>
             <MovieCard data={datab} toggleFunction={this.toggleModal.bind(this)}/>
 ))
}
</div>
</div>
  );
  }
}
