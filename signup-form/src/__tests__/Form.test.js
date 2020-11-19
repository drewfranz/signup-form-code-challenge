import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form';

describe('Form wrapper component', () => {
  it('Loads the form container element', () => {
    const wrapper = shallow(<Form />);
    const el = wrapper.find('form.container');
    expect(el).toHaveLength(1);
  });
});