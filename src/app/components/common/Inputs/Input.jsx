import React from 'react';
import InputWrapper from './Input.styles';

const Input = ({ placeholder, type, styles, value, onChange }) => {
  const theme = {
    light: {
      border: '#F3F3F3',
      background: '#F3F3F3',
    },
  };

  return (
    <InputWrapper
      placeholder={placeholder}
      type={type}
      theme={theme[styles]}
      value={value || ''}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  styles: 'light',
  type: 'text',
  value: null,
  onChange: () => {},
};

export default Input;
