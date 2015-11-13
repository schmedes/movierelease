import React, {Component, PropTypes} from 'react';

export default class MovieModal extends Component {
  render() {
    if (this.props.open) {
      return (
        <div className="modal" onClick={()=> this.props.toggleFunction()}>
        <div className="modal-content">
        <img src={this.props.data.urlPoster}></img>
        <div className="modal-info">
        <h1>{this.props.data.title}</h1>
        Genre:
        {this.props.data.genres.map(data =>
         <span key={data}> {data} </span>
        )}
        <p>Runtime: {this.props.data.runtime[0]}</p>
        <p>Plot:</p>
        <p>{this.props.data.plot}</p>
        </div>
        </div></div>
      );
    }
    return (
        <div className="empty"></div>
      );
  }
}

MovieModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleFunction: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
