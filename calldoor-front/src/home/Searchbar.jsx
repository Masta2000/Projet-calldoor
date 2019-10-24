import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './SearchBar.scss';
import ListCards from './ListCards';
import ListSearchCompanies from '../quiz/ListSearchCompanies';
import { searchCompanies } from '../actions/search';

class SearchBar extends Component {
  componentWillUnmount() {
    const { searchCompanies } = this.props;
    searchCompanies('');
  }

  handleChange = (event) => {
    const { searchCompanies } = this.props;
    const { value } = event.target;
    searchCompanies(value);
  }

  onSelectCompany = (company) => {
    const { selectCompany, searchCompanies } = this.props;
    selectCompany(company);
    searchCompanies('');
  }

  renderCompanies = () => {
    const { companies, from } = this.props;
    if (from === 'home' || from === 'managecompany') {
      return (<ListCards companies={companies} from={from} />);
    }
    return (<ListSearchCompanies companies={companies} selectCompany={this.onSelectCompany} />);
  }


  render() {
    const {
      searchValue, error,
    } = this.props;
    return (
      <div className="SearchBar">
        <input autoComplete="off" className="search-box-input" type="text" name="searchcompany" id="searchcompany" value={searchValue} onChange={this.handleChange} placeholder="Trouvez votre entreprise" />
        <img className="inputImage" src="/image/glass.png" id="input_img" alt="input_img" />
        {searchValue === '' ? '' : this.renderCompanies()}
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
  companies: state.searchCompanies.list,
  searchValue: state.searchCompanies.searchValue,
  error: state.searchCompanies.error,
});

const mdtp = dispatch => bindActionCreators({ searchCompanies }, dispatch);

export default connect(mstp, mdtp)(SearchBar);
