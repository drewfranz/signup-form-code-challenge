import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
  it('Loads the container element', () => {
    const wrapper = shallow(<App />);
    const el = wrapper.find('div.App');
    expect(el).toHaveLength(1);
  });
});
