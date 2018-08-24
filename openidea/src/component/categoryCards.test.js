
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CategoryCards from './categoryCards';

const ideas = [{
  id: 1, users_id: 1, title: 'Robot1', description: 'I have decided to write code for my new robot to connect it to my Alexa', image_url: 'https://i.pinimg.com/564x/8c/f0/60/8cf06020e82ca94ddd8f65b990e84621.jpg', created_at: '2018-08-07T00:33:40.366Z', updated_at: '2018-08-07T00:33:40.366Z',
}, {
  id: 2, users_id: 2, title: 'My next house', description: 'this is the plan for the next house i am going to build', image_url: 'https://i.pinimg.com/564x/d2/f6/06/d2f606c5bd27ef8ee95c1252da7cd6f4.jpg', created_at: '2018-08-07T00:33:40.366Z', updated_at: '2018-08-07T00:33:40.366Z',
}, {
  id: 3, users_id: 3, title: 'My new project', description: 'I want to write a book', image_url: 'https://i.pinimg.com/564x/c9/99/3c/c9993c6c4093d50745f8cbc5335196ac.jpg', created_at: '2018-08-07T00:33:40.366Z', updated_at: '2018-08-07T00:33:40.366Z',
}, {
  id: 4, users_id: 1, title: 'My new project', description: 'Oxygen', image_url: 'https://i.pinimg.com/564x/41/c8/d7/41c8d7be885cd2821a0c43a2dfe07fa4.jpg', created_at: '2018-08-07T00:33:40.366Z', updated_at: '2018-08-07T00:33:40.366Z',
}];

describe('CategoryCards', () => {
  it('render the components', () => {
    const wrapper = shallow(<categoryCards />);
    // expect (wrapper.find('ideas')).toHaveLength(ideas.length)
  });
});
