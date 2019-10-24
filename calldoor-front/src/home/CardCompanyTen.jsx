import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { asyncFetchCompanies } from '../actions/index';
import CardCompany from '../company/CardCompany';

import './CardCompanyTen.scss';


class CardCompanyTen extends Component {
  componentDidMount() {
    const { asyncFetchCompanies } = this.props;
    asyncFetchCompanies();
  }

  render() {
    const { companies, loading, error } = this.props;
    const top3 = companies.slice(0, 3);
    const top7 = companies.slice(3);
    return (
      <div className="CardCompanyTen">
        <h1>Le Top 10 des entreprises</h1>
        {
          (loading)
            ? <div>Chargement en cours...</div>
            : ''
        }
        {
          (error !== '')
            ? <div>{error}</div>
            : ''
        }
        <div className="top3">
          {
           top3.map(
             (company, index) => <CardCompany company={company} index={index} key={company.id} />,
           )
          }
        </div>
        <div className="top7">
          {
           top7.map(
             company => <CardCompany company={company} key={company.id} />,
           )
          }
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  loading: state.companies.loading,
  companies: state.companies.list,
  error: state.companies.error,
});

const mdtp = dispatch => bindActionCreators({ asyncFetchCompanies }, dispatch);

export default connect(mstp, mdtp)(CardCompanyTen);
