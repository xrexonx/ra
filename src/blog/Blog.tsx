import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikActions, FormikProps } from "formik";

interface UserForm {
  name: string;
  email: string;
  phone: string;
  website: string;
}

class Blog extends Component<FormikProps<UserForm>> {

  initialValues() {
    return {
      name: '',
      email: '',
      phone: '',
      website: ''
    };
  }

  validate(values: UserForm) {
    console.log({values});
  }

  onSubmit(values: UserForm, actions: FormikActions<UserForm>) {
    actions.setSubmitting(true);
    console.log({values});
    // Submit data to server
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      body: JSON.stringify(values), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

    setTimeout(() => {
      actions.setSubmitting(false);
    }, 400);
  }

  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
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
                <Field className="mdl-textfield__input" type="text" name="website" />
                <label className="mdl-textfield__label" htmlFor="website">Website</label>
                <span className="mdl-textfield__error">
              <ErrorMessage name="website" component="div" />
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
      </div>
    );
  }
}

export default Blog;