import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

class FormikComponent extends Component {

  initialValues() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  }

  validate(values) {
    console.log({values});
  }

  onSubmit(values, setSubmitting ) {
    setSubmitting(true);
    console.log({values});
    // Submit data to server
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  }

  render() {
    return (
      <Formik
        validate={this.validate}
        initialValues={this.initialValues()}
        onSubmit={(values, { setSubmitting }) => this.onSubmit(values, setSubmitting)}
      >
        {({isSubmitting}) => (
          <Form>
            <div className="mdl-textfield mdl-js-textfield">
              <Field className="mdl-textfield__input" type="text" name="name" />
              <label className="mdl-textfield__label" htmlFor="name">Name</label>
              <span className="mdl-textfield__error">
                <ErrorMessage name="name" component="div" />
              </span>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield">
              <Field className="mdl-textfield__input" type="email" name="email" />
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
              <span className="mdl-textfield__error">
                <ErrorMessage name="email" component="div" />
              </span>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield">
              <Field className="mdl-textfield__input" type="number" name="phone" />
              <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
              <span className="mdl-textfield__error">
                <ErrorMessage name="phone" component="div" />
              </span>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield">
              <Field className="mdl-textfield__input" type="password" name="password" />
              <label className="mdl-textfield__label" htmlFor="password">Password</label>
              <span className="mdl-textfield__error">
                <ErrorMessage name="password" component="div" />
              </span>
            </div>
            <br/>
            <button
              disabled={isSubmitting}
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Button
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormikComponent;