import React, { Component } from 'react';
import Moment from 'react-moment';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { urlApi } from '../constants';
import RatingStars from './RatingStars';
import 'moment-timezone';


import './CommentCompany.scss';

class CommentCompany extends Component {
  deleteReviews = () => {
    const { comment: { id } } = this.props;
    const config = {
      method: 'DELETE',
    };

    fetch(`${urlApi}/review/validation/content/${id}`, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Element supprimé', 3000);
        } else {
          NotificationManager.error('', 'Erreur lors de la suppression d\'un commentaire', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de la suppression d\'un commentaire', 3000);
      });
  }

  render() {
    const {
      from,
      comment: {
        date, review7, review8, rating,
      },
    } = this.props;
    return (
      <div className="CommentCompany">
        <img className="imgUser" src="/assets/images/user.png" alt="imgUser" />
        <div>
          <p><Moment format="DD-MM-YYYY" date={new Date(+date)} /></p>
          <p>
            <b> Note: </b>
          </p>
          <RatingStars stars={rating} />
          <p className="AvisPropos">
            <b>Avis :</b>
            {review7}
          </p>
          <p className="AvisPropos">
            <b>Proposition : </b>
            {review8}
          </p>
          {from === 'manageCompany'
            ? <button onClick={this.deleteReviews} type="button">Supprimer</button>
            : ''}
          <NotificationContainer />
        </div>
      </div>
    );
  }
}

CommentCompany.defaultProps = {
  comment: {},
};

export default CommentCompany;
