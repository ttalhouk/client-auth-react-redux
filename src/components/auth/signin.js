import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'redux';
import * as actions from '../../actions';


class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

// using redux form v6
    // return (
    //   <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
    //     <fieldset className="form-group">
    //       <label>Email:</label>
    //       <Field name="email" component="input" className="form-control" />
    //     </fieldset>
    //     <fieldset className="form-group">
    //       <label>Password:</label>
    //       <Field name="password" component="input" type="password" className="form-control" />
    //     </fieldset>
    //     {this.renderAlert()}
    //     <button action="submit" className="btn btn-primary">Sign In</button>
    //   </form>
    // );
//   }
// }

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errors
  };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
