import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../store/actions/userAuthentication';
import classes from './style.scss';

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
    const { email, password } = this.state
    const { history, loginUser } = this.props;
    e.preventDefault();
    loginUser(email, password, history);
    this.setState({ submitted: true })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
  }

  render() {
    const { email, password } = this.state;
    return (<div className={classes.loginForm}>
				<div className={classes.container}>
					<h1>LOGIN</h1>
					<form onSubmit={this.handleSubmit}>
						<div className={classes.form_control}>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" value={email} onChange={this.handleChange} placeholder="email" required autoComplete="email" />
						</div>
            <div className={classes.form_control}>
							<label htmlFor="password">Password</label>
							<input type="password" name="password" id="password" value={password} onChange={this.handleChange} placeholder="password" minLength={6} required autoComplete="new-password" />
						</div>
						<button>Submit</button>
					</form>
				</div>
    </div>);
  }
};

const mapStateToProps = state => ({
  loggingIn: state.authentication.loggingIn
})

const mapDispatchToProps = dispatch => ({
	loginUser: (email, password, history) => dispatch(login(email, password, history))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm));
