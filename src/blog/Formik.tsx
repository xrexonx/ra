// import React from 'react';
import * as React from 'react';
import {ErrorMessage, Field, Form, Formik, FormikProps, FormikActions } from 'formik';

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

class FormikComponent extends React.Component<FormikProps<User>> {

  initialValues() {
    return {
      name: '',
      email: '',
      phone: '',
      password: ''
    };
  }

  validate(values: User) {
    console.log({values});
  }

  onSubmit(values: User, actions: FormikActions<User>) {
    actions.setSubmitting(true);
    console.log({values});
    // Submit data to server<>
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 400);
  }

  render() {
    return (
      <Formik
        initialValues={this.initialValues()}
        onSubmit={(values, actions) => this.onSubmit(values, actions)}
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