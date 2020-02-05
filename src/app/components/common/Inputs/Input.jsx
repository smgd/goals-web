import React from 'react';
import InputWrapper from './Input.styles';

const Input = ({ placeholder, type, theme, value, onChange, extraStyle }) => {
  const themes = {
    light: {
      border: '#F3F3F3',
      background: '#F3F3F3',
    },
    lightWithBorder: {
      border: '#FEBD81',
      background: '#F3F3F3',
    },
  };

  return (
    <InputWrapper
      placeholder={placeholder}
      type={type}
      theme={themes[theme]}
      value={value || ''}
      onChange={onChange}
      style={extraStyle}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  theme: 'light',
  type: 'text',
  value: null,
  onChange: () => {},
  style: {},
};

export default Input;
