import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../components/SignUp';

describe('SignUp wrapper component', () => {
  it('Loads the SignUp container element', () => {
    const nextStep = () => {};
    const validate = () => {};
    const handleChange = () => {};
    const values = {
      firstName: '',
      email: '',
      password: '',
    };
    const errors = {};
    const wrapper = shallow(<SignUp
      nextStep={nextStep}
      validate={validate}
      handleChange={handleChange}
      values={values}
      errors={errors} />);
    const el = wrapper.find('div.sign-up');
    expect(el).toHaveLength(1);
  });
});