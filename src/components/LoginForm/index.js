import React from 'react';
import classes from './style.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
        [name]: value
    })
  }

  render() {
    const { email, password } = this.state;
    return (<div className={classes.loginForm}>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={this.handleChange} placeholder="Email" required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={this.handleChange} placeholder="Password" minLength={6} required autoComplete="new-password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
    );
  }
};

const mapStateToProps = state => ({
  loggingIn: state.authentication.loggingIn
})

const mapDispatchToProps = dispatch => ({
	// registerUser: user => dispatch(register(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);
