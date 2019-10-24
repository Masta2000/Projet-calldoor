import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { urlApi } from '../constants';
import './SignIn.scss';

import { adminRegister } from '../actions/register';

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm = (event) => {
    const { adminRegister, history, location: { state } } = this.props;
    event.preventDefault();
    fetch(`${urlApi}/auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error();
      })
      .then((admin) => {
        NotificationManager.success('', 'Bonjour Edouard!', 1000);
        adminRegister(admin);
        setTimeout(() => {
          const nextLocation = state ? state.from.pathname : '/admin/accueil';
          history.push(nextLocation);
        }, 1000);
        localStorage.setItem('login', admin.token);
      })
      .catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'authentification.', 1000);
      });
  }

  render() {
    const { login, password } = this.state;
    return (
      <div className="SignIn">
        <form className="connectionAdmin" onSubmit={this.submitForm}>
          <label className="textLogin" htmlFor="login">
            Login
            <input className="loginConnect" id="login" type="text" name="login" value={login} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
          Password
            <input className="passwordConnect" id="password" type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
          <button className="connectionOk" type="submit">Connection</button>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ adminRegister }, dispatch);

export default connect(null, mdtp)(SignIN);
