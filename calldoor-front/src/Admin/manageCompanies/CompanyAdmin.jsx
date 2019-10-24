import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CompanyById } from '../../actions/companyById';
import GlobalRating from '../../company/GlobalRating';
import CardCompany from '../../company/CardCompany';
import AllCommentsCompany from '../../company/AllCommentsCompany';

import './CompanyAdmin.scss';

class CompanyAdmin extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { CompanyById } = this.props;
    CompanyById(id);
  }

  render() {
    const {
      loading, error, company, match: { params: { id } },
    } = this.props;
    return (
      <div className="CompanyAdmin">
        <div className="Company-left">
          <CardCompany company={company} from="manageCompany" />
          <GlobalRating ratings={company} from="manageCompany" />
        </div>
        <div className="Company-right">
          <AllCommentsCompany companyId={id} from="manageCompany" />
        </div>
        {
          (loading)
            ? <div className="loading">Chargement des entreprises...</div>
            : ''
        }
        {
          (error !== '')
            ? <div className="error">{error}</div>
            : ''
        }
      </div>
    );
  }
}
const mstp = state => ({
  company: state.companyById.list[0],
  loading: state.companyById.loading,
  error: state.companyById.error,
});


const mdtp = dispatch => bindActionCreators({ CompanyById }, dispatch);

export default connect(mstp, mdtp)(CompanyAdmin);
