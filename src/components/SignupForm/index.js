import React from 'react';
import classes from './style.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../store/actions/register'

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  confirmPassword = (e) => {
    const { user: { password, confirmPassword } } = this.state;
    if(password !== confirmPassword){
      console.log(password)
      console.log(confirmPassword)
      return e.target.setCustomValidity("Passwords Don't Match");
    }
    e.target.setCustomValidity("");
  }

  handleSubmit = (e) => {
    const { user } = this.state
    const { history } = this.props
    e.preventDefault();
    this.setState({ submitted: true })
    this.props.registerUser(user, history);
  }

  render(){
    const { user: { fullName, email, password, confirmPassword } } = this.state;
    return (<div className={classes.signupForm}>
        <div className={classes.container}>
          <h1>SIGN-UP</h1>
          <form onSubmit={this.handleSubmit}>
            <div className={classes.form_control}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={this.handleChange}
                placeholder="full name"
              required autoComplete="name"
              />
            </div>
            <div className={classes.form_control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
                required autoComplete="email"
              />
            </div>
            <div className={classes.form_control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
                minLength={6}
                required
                autoComplete="new-password"
              />
            </div>
          <div className={classes.form_control}>
            <label htmlFor="confirmPassword">Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              onKeyUp={this.confirmPassword}
              placeholder="Password"
              minLength={6}
              required
              autoComplete="new-password"
            />
          </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
	registering: state.authentication.registering
});

const mapDispatchToProps = dispatch => ({
  registerUser: (user, history) => dispatch(register(user, history))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
