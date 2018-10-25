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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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

  handleSubmit = (e) => {
    const { user } = this.state
    const { history } = this.props
    e.preventDefault();
    this.setState({ submitted: true })
    this.props.registerUser(user, history);
  }

  render(){
    const { user: { firstName, lastName, email, password } } = this.state;
    return (<div className={classes.signupForm}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={firstName} onChange={this.handleChange} placeholder="First Name" required autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={lastName} onChange={this.handleChange} placeholder="Last Name" required autoComplete="family-name" />
          </div>
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
	registering: state.authentication.registering
});

const mapDispatchToProps = dispatch => ({
  registerUser: (user, history) => dispatch(register(user, history))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
