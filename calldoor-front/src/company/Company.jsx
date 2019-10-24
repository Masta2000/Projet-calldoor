import React, { Component } from 'react';
import { urlApi } from '../constants';
import GlobalRating from './GlobalRating';
import DescriptionCompany from './DescriptionCompany';
import AllCommentsCompany from './AllCommentsCompany';

import './Company.scss';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
    };
  }


  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`${urlApi}/company/review/${id}`)
      .then(res => res.json())
      .then((company) => {
        this.setState({ company });
      });
  }


  render() {
    const { company } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div className="Company">
        <div className="titlePageCompany">
          <h2>Page de l&apos;entreprise</h2>
        </div>
        <div className="contentPageCompany">
          <DescriptionCompany company={company[0]} />
          <GlobalRating ratings={company[0]} />
          <AllCommentsCompany companyId={id} />
        </div>
      </div>
    );
  }
}

export default Company;
