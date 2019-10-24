import React, { Component } from 'react';
import CommentCompany from './CommentCompany';
import { urlApi } from '../constants';

import './AllCommentsCompany.scss';

class AllCommentsCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    const { companyId } = this.props;
    fetch(`${urlApi}/review/company/${companyId}`)
      .then(res => res.json())
      .then((comments) => {
        this.setState({ comments });
      });
  }

  render() {
    const { comments } = this.state;
    const { from } = this.props;
    return (
      <div className="AllCommentsCompany">
        {comments.map(comment => <CommentCompany comment={comment} key={comment.id} from={from} />)
          .reverse()}
      </div>
    );
  }
}

export default AllCommentsCompany;
