import React from 'react';
import { shallow } from 'enzyme';
import Confirmation from '../components/Confirmation';

describe('Confirmation wrapper component', () => {
  it('Loads the Confirmation container element', () => {
    const values = {
      firstName: '',
      email: '',
      password: '',
    };
    const wrapper = shallow(<Confirmation values={values}/>);
    const el = wrapper.find('div.confirmation');
    expect(el).toHaveLength(1);
  });
});