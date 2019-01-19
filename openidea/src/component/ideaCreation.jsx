
import React, { Component } from 'react';
import { Divider, Form, Checkbox, Button, Segment } from 'semantic-ui-react';

class LabelExamplePointing extends Component {
  render() {
    const {
      users_id, title, description, image_url, label,
    } = this.props;

    // updateTitle
    const updateTitle = (e) => {
      e.preventDefault();
      this.props.handleChange('title', e.target.value);
    };
    // updateDescription
    const updateDescription = (e) => {
      e.preventDefault();
      this.props.handleChange('description', e.target.value);
    };
    // updateImage
    const updateImage = (e) => {
      e.preventDefault();
      this.props.handleChange('image_url', e.target.value);
    };
    // update label
    const updateLabel = (e) => {
      e.preventDefault();
      this.props.handleChange('label', e.target.value);
    };

    const submitForm = (e) => {
      e.preventDefault();
      console.log('About to submit: ', {
        users_id, title, description, image_url, label,
      });
      this.props.handleSubmit({
        users_id, title, description, image_url, label,
      });
    };

    return (
      <Segment style={{ backgroundColor: 'lightgrey', marginLeft: 100, marginRight: 100 }}>
        <Form onSubmit={submitForm}>
          <Form.Field >
            <Divider />
              <input
                type="text"
                placeholder="Idea title"
                className="title"
                onChange={updateTitle}
              />
          </Form.Field>

            <Form.Field >
              <input
                type="text"
                placeholder="Idea description"
                className="description"
                onChange={updateDescription}
              />
            </Form.Field>
              <Form.Field >
                <input
                  type="text"
                  placeholder="image_url"
                  className="image_url"
                  onChange={updateImage}
                />

              </Form.Field>
                <Form.Field >
                  <input
                    type="text"
                    placeholder="Public or Private"
                    className="label"
                    onChange={updateLabel}
                  />
                </Form.Field>
                  <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions" />
                  </Form.Field>

                    <Button
                      fluid
                      size="large"
                      style={{ color: 'orange' }}
                      href=""
                      type="submit"
                    >
                        Submit
                    </Button>
        </Form>
      </Segment>
    );
  }
}
export default LabelExamplePointing;
