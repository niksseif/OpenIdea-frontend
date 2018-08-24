import React, { Component } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';

class FormExampleForm extends Component {
  render() {
    // update email
    const updateEmail = (e) => {
      e.preventDefault();
      const value = e.target.value;
      this.props.handleChange('email', value);
    };

    // update password
    const updatePassword = (e) => {
      e.preventDefault();
      const value = e.target.value;
      this.props.handleChange('password', value);
    };
    return (
      <Segment
        style={{
 backgroundColor: 'lightgrey', marginLeft: 100, marginRight: 100, marginTop: 100,
}}
      >
        <Form
          style={{ marginTop: 50 }}
        >
          <Form.Field>
            <label>Email</label>
              <input
                placeholder="Email"
                type="email"
                style={{ width: 450 }}
                onChange={updateEmail}
              />
          </Form.Field>
            <Form.Field>
              <label>Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  style={{ width: 450 }}
                  onChange={updatePassword}
                />
            </Form.Field>
              <Button
                type="submit"
                onClick={this.props.handleSubmit}
              >
            Submit
              </Button>
        </Form>
      </Segment>
    );
  }
}

export default FormExampleForm;
